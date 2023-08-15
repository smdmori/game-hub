import {useQuery} from "@tanstack/react-query";
import Trailer from "../interfaces/Trailer";
import APIClient from "../services/api-client";

const useTrailers = (gameID: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameID}/movies`);

  return useQuery({
    queryKey: ["trailers", gameID],
    queryFn: () => apiClient.getAll(),
  });
};

export default useTrailers;
