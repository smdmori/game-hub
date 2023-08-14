import axios from "axios";

export interface FetchData<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fce3a3fc93e64da6b646abc13712d312",
  },
});
