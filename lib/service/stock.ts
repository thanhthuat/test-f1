import { moneys } from "lib/api/rateMoney";
import { stock } from "lib/api/stock";

const getAllStock = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(stock);
    }, 100);
  });
};

const getAllRateMoney = () => {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(moneys);
    }, 100);
  });
};

export default { getAllStock, getAllRateMoney };
