"use client"

import { useEffect, useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import Doctor from "./_components/Doctor";
import Hero from "./_components/Hero";
import Api from "./_utils/Api";

export default function Home() {

  const [doctorList,setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  },[])

  const getDoctorList = () => {
    Api.getDoctors().then((res) => {
      setDoctorList(res.data.data)
    }).catch((error) => {
      console.log(error.message);
    })
  }

  return (
    <div>
        <Hero />
        <CategorySearch />
        <Doctor doctorList={doctorList}/>
    </div>
  );
}
