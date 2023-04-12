import { categories } from "lib/api/category";

const getCategory = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(categories);
    }, 100);
  });
};

export default {
  getCategory,
};
