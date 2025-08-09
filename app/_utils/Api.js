import axios from "axios";

const connectAxios = axios.create({
    baseURL:"http://localhost:1337/api",
})

const getCategories = () => connectAxios.get("/categories?populate=*");
const getDoctors = () => connectAxios.get("/doctor-lists?populate=*");

const getDoctorByCategory = (category) => {
    return connectAxios.get(`/doctor-lists?populate=*&filters[category][name][$contains]=${category}`);
}

const getDoctorById = (documentId) => {
    return connectAxios.get(`/doctor-lists/${documentId}?populate=*`);
}

const bookAppointment = (data) => {
    return connectAxios.post(`/appointments`,data);
}

export default { 
    getCategories,
    getDoctors,
    getDoctorByCategory,
    getDoctorById,
    bookAppointment,
    bookAppointment
}