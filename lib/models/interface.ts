export interface TypechildCategories {
  category_id: number;
  category_name: string;
  slug: string;
  parent_id: number;
}

export interface TypeCategories {
  category_id: number;
  category_name: string;
  slug: string;
  parent_id: null | number;
  children: TypechildCategories[];
}

export interface TypeStateCategories {
  categories: TypeCategories[];
  status: string;
}

export interface TypeNews {
  news_id: number;
  category_id: number;
  title: string;
  img: string;
  desc: string;
  content: string;
  create_At: string;
  creator: string;
  views: number;
  is_hot: boolean;
  is_show_img: boolean;
  is_banner: boolean;
}

export interface TypeStateNews {
  news: TypeNews[];
  status: string;
}

export interface TypeOpinion {
  job: string;
  title: string;
  img: string;
}

export interface TypeStock {
  stock_id: number;
  stock_code: string;
  current_price: number;
  last_price: number;
}

export interface TypeRateMoney {
  money_id: number;
  money_name: string;
  money_code: string;
  current_price: number;
  last_price: number;
}

export interface IresponeMovie {
  adult: boolean;
  backdrop_path: string;
    genre_ids: number[
        
    ],
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface IresponeMovieDetail  extends IresponeMovie {
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path:string,
        backdrop_path: string
    },
    budget: number,
    genres: [
        {
        id: number;
        name: string;
        },
    ],
  homepage: string;
    
    imdb_id:string,
    production_companies: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        },
       
    ],
    production_countries: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [
        {
            english_name: string,
            iso_639_1: string,
            name: string
        },
       
    ],
    status: string,
    tagline: string,
    video: boolean,
   
}

export interface responeHttp{
  page: number;
  total_pages: number;
  results: IresponeMovie[];
  total_results: number;

}
export class HttpResponse<T> {
  statusCode!: string;
  data!: T;
}
