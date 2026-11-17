export interface MovieType {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
