import axios from "axios";

var adminToken =
  typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
var userToken =
  typeof window !== "undefined" ? localStorage.getItem("userToken") : null;

const instance = axios.create({
  baseURL: "https://ecom-vkxe.onrender.com",
  // headers: {
  //   Authorization: `Bearer ${
  //     adminToken ? adminToken : userToken ? userToken : null
  //   }`,
  // },
});
instance.interceptors.request.use((request) => {
  var adminToken = localStorage.getItem("adminToken");
  var userToken = localStorage.getItem("userToken");

  if (userToken) {
    request.headers["Authorization"] = "Bearer " + userToken;
  }
  if (adminToken) {
    request.headers["Authorization"] = "Bearer " + adminToken;
  }
  return request;
});

export default instance;
