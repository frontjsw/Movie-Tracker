export interface MovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MovieDetailType extends MovieType {
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
}
export interface MovieCastsType {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}
export interface MovieCreditsResponseType {
  id: number;
  cast: MovieCastsType[];
}

export interface MovieVideosType {
  key: string;
  name: string;
  type: string;
  site: string;
}

export interface MoviesResponse {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

export interface MovieVideosResponseType {
  id: number;
  results: MovieVideosType[];
}
