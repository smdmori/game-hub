import {useQuery} from "@tanstack/react-query";
import Screenshot from "../interfaces/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameID: number) => {
  const apiCLient = new APIClient<Screenshot>(`games/${gameID}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameID],
    queryFn: () => apiCLient.getAll(),
  });
};

export default useScreenshots;
