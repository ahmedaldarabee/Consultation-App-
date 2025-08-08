import axios from "axios";

const connectAxios = axios.create({
    baseURL:"http://localhost:1337/api",
})

const getCategories = () => connectAxios.get("/categories?populate=*");

export default { getCategories }