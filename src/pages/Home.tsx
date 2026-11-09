import { useEffect, useState } from "react";
import MovieCard from "../components/common/MovieCard/MovieCard";

const Home = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [movieData, setMovieData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP 상태 코드: ${res.status}`);
        }

        const data = await res.json();

        setMovieData(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("error : ", error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [apiKey]);

  return (
    <div>
      {isLoading ? (
        <>로딩중...</>
      ) : (
        <>
          {movieData.map((data) => (
            <MovieCard key={data.id} data={data} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
