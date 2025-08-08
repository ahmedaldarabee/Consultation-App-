import axios from "axios";

const connectAxios = axios.create({
    baseURL:"http://localhost:1337/api",
})

const getCategories = () => connectAxios.get("/categories?populate=*");
const getDoctors = () => connectAxios.get("/doctor-lists?populate=*");

export default { getCategories,getDoctors }