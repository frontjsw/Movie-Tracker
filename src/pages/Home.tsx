import { useEffect, useState } from "react";
import MovieCard from "../components/common/MovieCard/MovieCard";

const Home = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [movieData, setMovieData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP 상태 코드: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMovieData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error : ", error);
        setIsLoading(false);
      });
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
