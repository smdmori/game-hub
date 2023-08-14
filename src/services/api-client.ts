import axios, {AxiosRequestConfig} from "axios";

export interface FetchData<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fce3a3fc93e64da6b646abc13712d312",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => axiosInstance.get<FetchData<T>>(this.endpoint, config).then((res) => res.data);
}

export default APIClient;
