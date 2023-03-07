const { default: axios } = require("axios");
var adminToken = typeof window!=="undefined" ?  localStorage.getItem("adminToken"):null;
var userToken = typeof window!=="undefined" ?  localStorage.getItem("userToken"):null;

const instance = axios.create({
    baseURL : "https://ecom-vkxe.onrender.com",
    headers: {
        "Authorization" : `Bearer ${adminToken ? adminToken : userToken ? userToken : null}`
      }
})
// instance.interceptors.request.use(request => {
//   if (userToken) {
//       request.headers.common.Authorization = `Bearer ${userToken}`;
//   }
//   return request;
// });

export default instance;