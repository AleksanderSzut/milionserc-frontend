import ApiBase from "../ApiBase";

const resource = "/confession";
const resourcePlural = "/confessions";

export default {
  createConfession(uuid, token, title, content, images, videos) {
    const url = `${resource}/${uuid}/${token}`;

    return ApiBase.post(
      url,
      {
        title,
        content,
        images,
        videos
      },
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
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
