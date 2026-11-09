const MovieCard = ({ data }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <h1 className="title">{data.title}</h1>
      <div>{data.original_language}</div>
      <div>{data.original_title}</div>
      <div>{data.overview}</div>
      <div>{data.release_date}</div>
      <div>{data.vote_average}</div>
    </div>
  );
};

export default MovieCard;
