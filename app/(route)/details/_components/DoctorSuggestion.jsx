"use client"

import Api from "@/app/_utils/Api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DoctorSuggestion = () => {

    const [doctorList,setDoctorList] = useState([]);

    useEffect(() => {
        getDoctorList();
    },[]);

    const getDoctorList = ()  => {
        Api.getDoctors().then((res) => {
            setDoctorList(res.data.data);
        }).catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className="flex flex-col gap-5  items-center justify-center">
            <h2 className="font-semibold">Suggestions for you</h2>
            <div className="">
                {doctorList?.slice(0,1).map((doctor,idx) => (
                    <Link key={idx} href={`/details/${doctor?.documentId}`}>
                        <div className="border-2 rounded-lg p-3 m-3 hover:scale-105 hover:shadow-md transition-all cursor-pointer duration-300">
                            <Image 
                                src={`http://localhost:1337${doctor?.image[0]?.url}`}
                                alt="doctor image"
                                width={500}
                                height={500}
                                className="h-[80px] w-full object-cover"
                                style={{ height: "auto" }}
                            />
                            <div className="flex items-baseline flex-col gap-4 mt-5  ">
                                <h2 className="cursor-pointer hover:text-lime-800 transition-all duration-300 rounded-full py-2 px-4 bg-lime-200 text-lime-600">{doctor?.category?.name}</h2>
                                <h2> <span className="text-lime-600">Name: </span> {doctor?.name}</h2>
                                <h2> <span className="text-lime-600">Experience Year: </span> {doctor?.yearOFExperience}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DoctorSuggestion