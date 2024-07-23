import { useQuery } from "@tanstack/react-query";

export const useInfoById = (ids?: string[]) =>
  useQuery({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?id=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });
