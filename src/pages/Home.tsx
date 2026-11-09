import { getPopularMovies } from "../api/movies";
import MovieCard from "../components/common/MovieCard/MovieCard";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getPopularMovies,
  });

  return (
    <div>
      {isLoading ? (
        <>로딩중...</>
      ) : isError ? (
        <>에러 발생 : {error.message}</>
      ) : (
        <>
          {data &&
            data.results.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
        </>
      )}
    </div>
  );
};

export default Home;
