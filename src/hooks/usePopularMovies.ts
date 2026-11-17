import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { getPopularMovies } from "../api/movies";

export const usePopularMovies = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["movies"],
      queryFn: ({ pageParam }) => getPopularMovies(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.page === lastPage.total_pages
          ? undefined
          : allPages.length + 1;
      },
    });
  const observeRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return { data, isLoading, isError, error, observeRef };
};
