import MovieCard from "../../components/common/MovieCard/MovieCard";
import "./Home.scss";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { useSearchMovies } from "../../hooks/useSearchMovies";

const Home = () => {
  const { data, isLoading, isError, error, observeRef } = usePopularMovies();
  const { searchData, handleSearch, searchText } = useSearchMovies();

  if (isLoading) return <>로딩중...</>;
  if (isError) return <>에러 발생 : {error?.message}</>;
  return (
    <div className="page-container home">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="검색어를 입력해주세요."
      />
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
