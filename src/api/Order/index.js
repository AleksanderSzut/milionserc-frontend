import ApiBase from "../ApiBase";

const resource = "/order";

export default {
  postOrder(payload) {
    const url = `${resource}`;

    return ApiBase.post(url, payload);
  }
};
