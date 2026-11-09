import { useRef, useState } from "react";
import { getPopularMovies, getSearchMovies } from "../api/movies";
import MovieCard from "../components/common/MovieCard/MovieCard";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getPopularMovies,
  });
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
    <div>
      <input type="text" onChange={handleSearch} />
      <>
        {searchText === "" ? (
          <div>
            {data?.results.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        ) : (
          <div>
            {searchData?.results.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
