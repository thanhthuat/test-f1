import axios from 'axios';
import apiConfig from './apiConfig';
import { responeHttp } from 'lib/models/interface';

//https://api.themoviedb.org/3/movie/popular?api_key=f2db6f4bb7de9fb016be7720040c6c2a&page=1
const axiosClient = axios.create({
  baseURL:  apiConfig.baseUrl ,
  headers: {
    'Content-Type': 'application/json',
  },
  
});

axiosClient.interceptors.request.use(async (config) => {
  config.params = {
   // add your default ones
   api_key: apiConfig.apiKey,
   // spread the request's params
    ...config.params,
  }
  return config;
}
 
  );

axiosClient.interceptors.response.use (
  (response) => {
    if (response && response.data) {
      return response ;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;