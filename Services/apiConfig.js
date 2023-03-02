const { default: axios } = require("axios");
var adminToken = typeof window!=="undefined" ?  localStorage.getItem("adminToken"):null;
const instance = axios.create({
    baseURL : "https://ecom-vkxe.onrender.com",
    headers: {
        "Authorization" : `Bearer ${adminToken}`
      }
})

export default instance;