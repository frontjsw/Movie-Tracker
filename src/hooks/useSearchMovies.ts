import { useQuery } from "@tanstack/react-query";
import { getSearchMovies } from "../api/movies";
import { useRef, useState } from "react";

export const useSearchMovies = () => {
  const [searchText, setSearchText] = useState("");
  const { data: searchData } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => getSearchMovies(searchText),
    enabled: searchText !== "",
  });

  const timerRef = useRef<number | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSearchText(value);
    }, 500);
  };

  return { searchData, handleSearch, searchText };
};
