import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshot from "../interfaces/Screenshot";

const useScreenshots = (gameID: number) => {
  const apiCLient = new APIClient<Screenshot>(`games/${gameID}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameID],
    queryFn: () => apiCLient.getAll(),
  });
};

export default useScreenshots;
