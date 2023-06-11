import { IresponeMovieDetail, responeHttp } from 'lib/models/interface';
import axiosClient from './axiosClient';
//http://ergast.com/api/f1/current/last/results
//https://ergast.com/api/f1/constructors/red_bull/results.json
// /circuits/<circuitId>
// /constructors/<constructorId>
// /drivers/<driverId>
// /grid/<position>
// /fastest/<rank>
// /status/<statusId>
interface typePayload {
  type : keyof typeof  raceType;
  year:string;
}
export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const raceType = {
  circuits: 'circuits',
  constructors: 'constructor',
  drivers: 'driver',
  grid:"grid",
  fastest:"fastest",
  status:"status"
  
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};
// https://ergast.com/api/f1/2023/circuits.json
// https://ergast.com/api/f1/2023/fastest/2/results.json
const tmdbApi = {
  getRaceList: (   payload:typePayload) => {
    const {year,type } = payload
    let url = `/${year ? year:"2023"}/`  + raceType[type ] 
    switch (type) {
      case 'constructors': url = url +'Standings.json'  
        break;
        case 'drivers': url = url +'Standings.json'  
        break;
        case 'circuits': url = url +'.json'  
        break;
        case 'fastest': url = url +'/1/results.json'  
        break;
      default:
        break;
    }
    return axiosClient?.get<responeHttp>(url, {
      params: {
       
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