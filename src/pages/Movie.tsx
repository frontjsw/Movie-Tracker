import { useParams } from "react-router";

const Movie = () => {
  const { id } = useParams();
  return <div>movie-{id}</div>;
};

export default Movie;
