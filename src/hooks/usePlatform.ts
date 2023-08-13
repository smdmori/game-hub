import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client";
import {FetchData} from "./useData";
import {Platform} from "./useGames";

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchData<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatform;
