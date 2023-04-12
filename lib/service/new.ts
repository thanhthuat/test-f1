import { news } from "lib/api/news";

const getAllNews = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(news);
    }, 100);
  });
};

export default {
  getAllNews,
};
