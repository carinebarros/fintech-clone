import { Currency } from "@/interfaces/crypto";
import { useQuery } from "@tanstack/react-query";

type UseInfoByIdReturn = {
  [key: string]: Currency & {
    logo: string;
  };
};

export const useInfoById = (ids?: string | string[]) =>
  useQuery<UseInfoByIdReturn>({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?id=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });
