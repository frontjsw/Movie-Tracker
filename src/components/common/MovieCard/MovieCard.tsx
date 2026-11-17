import "./MovieCard.scss";
import type { MovieType } from "../../../types/movie";
import { Link } from "react-router";
import StarRating from "../StarRating/StarRating";

interface MovieCardProps {
  data: MovieType;
}

const MovieCard = ({ data }: MovieCardProps) => {
  const rating = Math.floor(data.vote_average * 10) / 10;
  return (
    <Link to={`/movie/${data.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        className="movie-thumbnail"
      />
      <h1 className="movie-title">{data.title}</h1>
      <div className="movie-rating-box">
        <StarRating rating={rating} />
        <div className="movie-vote-average">{rating.toFixed(1)}</div>
      </div>
      <div className="movie-overview">{data.overview}</div>
      <div className="movie-release-date">{data.release_date}</div>
    </Link>
  );
};

export default MovieCard;
