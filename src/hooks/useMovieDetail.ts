import { useQuery } from "@tanstack/react-query";
import {
  getMovieCredits,
  getMovieDetail,
  getMovieVideos,
  getSimilarMovies,
} from "../api/movies";

export const useMovieDetail = (id: string | undefined) => {
  const movieId = Number(id);
  const { data: movieDetailData, isLoading: isDetailLoading } = useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => getMovieDetail(movieId),
  });

  const { data: creditsData, isLoading: isCreditsLoading } = useQuery({
    queryKey: ["movieCredits", movieId],
    queryFn: () => getMovieCredits(movieId),
  });

  const { data: videosData, isLoading: isVideosLoading } = useQuery({
    queryKey: ["movieVideos", movieId],
    queryFn: () => getMovieVideos(movieId),
  });

  const { data: similarMoviesData, isLoading: isSimilarMoviesLoading } =
    useQuery({
      queryKey: ["similarMovies", movieId],
      queryFn: () => getSimilarMovies(movieId),
    });

  const isLoading =
    isDetailLoading ||
    isCreditsLoading ||
    isVideosLoading ||
    isSimilarMoviesLoading;
  return {
    movieDetailData,
    creditsData,
    videosData,
    similarMoviesData,
    isLoading,
  };
};
