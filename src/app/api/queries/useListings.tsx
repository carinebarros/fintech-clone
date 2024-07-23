import { useQuery } from "@tanstack/react-query";

export const useListings = () =>
  useQuery({
    queryKey: ["listings"],
    queryFn: () => fetch("/api/listings").then((res) => res.json()),
  });
