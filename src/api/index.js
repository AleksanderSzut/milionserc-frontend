import Confession from "./Confession";
import Order from "./Order";
import getResponseCode from "@/api/GetResponseCode";

const apis = {
  Order,
  Confession
};

export const ApiFactory = {
  get: name => apis[name]
};

export const ApiStatus = {
  message: getResponseCode
};
