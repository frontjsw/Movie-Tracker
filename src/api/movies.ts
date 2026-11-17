import type {
  MovieCreditsResponseType,
  MovieDetailType,
  MoviesResponse,
  MovieVideosResponseType,
} from "../types/movie";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async (
  page: number,
): Promise<MoviesResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${page}&language=ko-KR'`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP 상태 코드 : ${res.status}`);
  }
  const data = await res.json();

  return data;
};

export const getSearchMovies = async (
  searchText: string,
): Promise<MoviesResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchText}&language=ko-KR'`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP 상태 코드 : ${res.status}`);
  }
  const data = await res.json();

  return data;
};

export const getMovieDetail = async (id: number): Promise<MovieDetailType> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=ko-KR'`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP 상태 코드 : ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const getMovieCredits = async (
  id: number,
): Promise<MovieCreditsResponseType> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR'`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP 상태 코드 : ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const getMovieVideos = async (
  id: number,
): Promise<MovieVideosResponseType> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=ko-KR`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP 상태 코드 : ${res.status}`);
  }

  const data = await res.json();

  return data;
};

export const getSimilarMovies = async (id: number): Promise<MoviesResponse> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=ko-KR`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP 상태 코드 : ${res.status}`);
  }

  const data = await res.json();

  return data;
};
