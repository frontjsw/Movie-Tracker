import MovieCard from "../../components/common/MovieCard/MovieCard";
import "./Home.scss";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { useSearchMovies } from "../../hooks/useSearchMovies";
import { Search } from "lucide-react";

const Home = () => {
  const { data, isLoading, isError, error, observeRef } = usePopularMovies();
  const { searchData, handleSearch, searchText } = useSearchMovies();

  if (isLoading) return <>로딩중...</>;
  if (isError) return <>에러 발생 : {error?.message}</>;
  return (
    <div className="page-container home">
      <div className="search-input-wrap">
        <label htmlFor="search-input" className="search-input-label">
          <Search color="#000" width={20} height={20} />
          <input
            type="text"
            className="search-input"
            id="search-input"
            onChange={handleSearch}
            placeholder="검색어를 입력해주세요."
          />
        </label>
      </div>
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
