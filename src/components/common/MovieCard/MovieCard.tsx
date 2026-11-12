import "./MovieCard.scss";
import type { MovieType } from "../../../types/movie";

interface MovieCardProps {
  data: MovieType;
}

const MovieCard = ({ data }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        className="movie-thumbnail"
      />
      <h1 className="movie-title">{data.title}</h1>
      <div className="movie-overview">{data.overview}</div>
      <div className="movie-release-date">{data.release_date}</div>
      <div className="movie-vote-average">{data.vote_average}</div>
    </div>
  );
};

export default MovieCard;
