import axios from "axios";

const connectAxios = axios.create({
    baseURL:"http://localhost:1337/api",
})

const getCategories = () => connectAxios.get("/categories?populate=*");
const getDoctors = () => connectAxios.get("/doctor-lists?populate=*");

const getDoctorByCategory = (category) => {
    return connectAxios.get(`doctor-lists?populate=*&filters[category][name][$contains]=${category}`);
}

export default { 
    getCategories,
    getDoctors,
    getDoctorByCategory
}