import ApiBase from "../ApiBase";

const resource = "/confession";
const resourcePlural = "/confessions";

export default {
  createConfession(uuid, token, payload) {
    const url = `${resource}/${uuid}/${token}`;

    return ApiBase.post(url, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  postPublic(uuid, token, isPublic) {
    const url = `${resource}/public/${uuid}/${token}`;

    return ApiBase.post(url, { public: isPublic });
  },
  getConfession(uuid, token) {
    const url = `${resource}/${uuid}/${token}`;
    console.log(url);
    return ApiBase.get(url);
  },
  getConfessions(per_page = 15, offset = 0, query = "") {
    const url = `${resourcePlural}?q=${query}&per_page=${per_page}&offset=${offset}`;
    return ApiBase.get(url);
  }
};
