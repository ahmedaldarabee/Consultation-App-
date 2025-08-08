"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import Api from "../_utils/Api"
import Image from "next/image"

const CategorySearch = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoriesData();
    },[])

    const getCategoriesData = () => {
        Api.getCategories()
        .then((res) => {
            setCategoryList(res.data.data);
            console.log('data be as:',res.data.data);
        })
        .catch((error) => {
            console.log('error message: ',error.message);
        })
    }
    
    return (
        <div className="flex flex-col gap-8 items-center justify-center w-full  my-10">
            <h2 className="font-semibold text-4xl"> <span className="text-lime-600">Search</span> Category </h2>
            
            <div className="flex max-sm:flex-col md:flex-row items-center w-full max-sm:px-5 md:max-w-sm gap-5">
                <Input type="text" placeholder="category name..." />
                <Button className="cursor-pointer">Search here</Button>
            </div>

            <div className="my-10 grid sm:grid-cols-1 md:grid-cols-3 ">
                {categoryList.map((category,idx) => (
                    <div key={idx} className="flex flex-col p-5 text-center items-center gap-4 rounded-lg bg-lime-200 m-2 hover:scale-110 duration-500 hover:rotate-3 hover:border hover:border-black transition-all ease-in-out  cursor-pointer">
                        <Image 
                            src={`http://localhost:1337${category?.icon[0]?.url}`}
                            width={70}
                            height={70}
                            alt={category.name}
                            priority={false}
                        />
                        <label>{category.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategorySearch