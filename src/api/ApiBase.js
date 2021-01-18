import axios from "axios";

const baseDomain = process.env.VUE_APP_API_HOST;
const baseURL = `${baseDomain}/api/`;

export default axios.create({
  baseURL
});
