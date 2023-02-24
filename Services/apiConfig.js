const { default: axios } = require("axios");

const instance = axios.create({
    baseURL : "https://ecom-vkxe.onrender.com"
})

export default instance;