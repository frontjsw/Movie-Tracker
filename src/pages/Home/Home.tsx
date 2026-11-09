import { useEffect, useRef, useState } from "react";
import { getPopularMovies, getSearchMovies } from "../../api/movies";
import MovieCard from "../../components/common/MovieCard/MovieCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import "./Home.scss";
const Home = () => {
  const [searchText, setSearchText] = useState("");

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["movies"],
      queryFn: ({ pageParam }) => getPopularMovies(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.page === lastPage.total_pages
          ? undefined
          : allPages.length + 1;
      },
    });
  const observeRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  const { data: searchData } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => getSearchMovies(searchText),
    enabled: searchText !== "",
  });

  const timerRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSearchText(value);
    }, 500);
  };

  if (isLoading) return <>로딩중...</>;
  if (isError) return <>에러 발생 : {error.message}</>;
  return (
    <div className="page-container home">
      <input type="text" onChange={handleSearch} />
      <div className="movie-list">
        {searchText === "" ? (
          <>
            {data?.pages.map((page) =>
              page.results.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
              )),
            )}
          </>
        ) : (
          <>
            {searchData?.results.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </>
        )}
      </div>
      <div ref={observeRef}>마지막 영역</div>
    </div>
  );
};

export default Home;
