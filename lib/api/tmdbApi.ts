import { IresponeMovieDetail, responeHttp } from 'lib/models/interface';
import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  now_playing:"now_playing"
  
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

const tmdbApi = {
  getMoviesList: (type : keyof typeof  movieType  ,page=1 , params:any) => {
    const url = 'movie/' + movieType[type ]  
    return axiosClient?.get<responeHttp>(url, {
      params: {
        page
      }
    });
  },
  getTvList: (type : keyof typeof tvType , params:any) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate: keyof typeof category, id:any) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate :keyof typeof category, params:any) => {
      console.log("params")
    const url = 'search/' + category[cate];
    return axiosClient.get(url,  {
      params: {
        query:params}
    });
  },
  detail: (cate :keyof typeof category, id:any, params:any) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get<IresponeMovieDetail>(url, params);
  },
  credits: (cate :keyof typeof category, id:any) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate :keyof typeof category, id :any) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;