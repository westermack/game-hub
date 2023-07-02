import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "805f1614c98044809c7b1cdce93200a5",
  },
});
