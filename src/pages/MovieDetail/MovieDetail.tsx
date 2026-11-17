import { Link, useParams } from "react-router";

import "./MovieDetail.scss";
import StarRating from "../../components/common/StarRating/StarRating";
import { User } from "lucide-react";
import { useMovieDetail } from "../../hooks/useMovieDetail";
const MovieDetail = () => {
  const { id } = useParams();
  const {
    movieDetailData,
    creditsData,
    videosData,
    similarMoviesData,
    isLoading,
  } = useMovieDetail(Number(id));

  if (isLoading) return <>Loading...</>;
  if (!movieDetailData) return null;

  const trailer = videosData?.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );
  const rating = Math.floor(movieDetailData.vote_average * 10) / 10;
  return (
    <div className="page-container movie-detail">
      <div className="movie-info-area">
        <div className="movie-backdrop">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movieDetailData.backdrop_path}`}
            alt={movieDetailData.title}
            className="movie-backdrop-img"
          />
        </div>
        <div className="movie-thumbnail">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetailData.poster_path}`}
            alt={movieDetailData.title}
            className="movie-thumbnail-img"
          />
        </div>
        <div className="movie-info-wrap">
          <div className="movie-title">{movieDetailData.title}</div>
          <div className="movie-original-title">
            {movieDetailData.original_title}
          </div>
          <div className="movie-info-tag-box">
            <span className="movie-info-tag">
              {movieDetailData.release_date} 개봉
            </span>
            <span className="movie-info-tag">
              러닝타임 {movieDetailData.runtime}분
            </span>
            {movieDetailData.genres.map((genre) => (
              <span className="movie-info-tag" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <div className="movie-rating-box">
            <StarRating rating={rating} />
            <div className="movie-rating">{rating.toFixed(1)}</div>
          </div>
          <div className="movie-overview">{movieDetailData.overview}</div>
        </div>
      </div>
      {creditsData && (
        <div className="movie-credits-area">
          <div className="area-title">출연진</div>
          <ul className="movie-cast-list">
            {creditsData.cast.slice(0, 15).map((cast) => (
              <li className="movie-cast-item" key={cast.id}>
                <div className="cast-profile">
                  {cast.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name}
                      className="cast-profile-img"
                    />
                  ) : (
                    <User
                      className="img-placeholder-icon"
                      width={80}
                      height={80}
                      color="#fff"
                    />
                  )}
                </div>
                <div className="cast-name">{cast.name}</div>
                <div className="cast-character">{cast.character}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {trailer && (
        <>
          <div className="movie-videos-area">
            <div className="area-title">예고편</div>
            <iframe
              className="movie-trailer"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </>
      )}
      {similarMoviesData && (
        <div className="movie-similar-area">
          <div className="area-title">비슷한 영화</div>
          <ul className="similar-movie-list">
            {similarMoviesData.results.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`} className="similar-movie-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="similar-movie-img"
                  />
                  <div className="similar-movie-title">{movie.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
