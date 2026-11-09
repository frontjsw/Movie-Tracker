const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${page}`,
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

export const getSearchMovies = async (searchText) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchText}`,
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
