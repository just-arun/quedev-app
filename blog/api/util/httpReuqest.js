import axios from "axios";
import { Configuration } from "../config/config";

export const HttpRequest = (method, path, data) => {
  const initAxios = () => {
    if (data) {
      return {
        method,
        url: `${Configuration().apiPORT}${path}`,
        data
      };
    } else {
      return {
        method,
        url: `${Configuration().apiPORT}${path}`
      };
    }
  };
  console.log(`${Configuration().apiPORT}${path}`);
  return axios(initAxios(), { withCredentials: true });
};
