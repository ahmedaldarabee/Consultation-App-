"use client"

import Api from '@/app/_utils/Api';
import React, { useEffect, useState } from 'react'

import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,CommandSeparator,CommandShortcut, } from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';



const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoriesData();
    },[])

    const getCategoriesData = () => {
        Api.getCategories()
        .then((res) => {
            setCategoryList(res.data.data);
        })
        .catch((error) => {
            console.log('error message: ',error.message);
        })
    }

    return (
        <div className='h-screen flex flex-col mt-5'>
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>

                        <CommandGroup heading="Suggestions">
                            {categoryList?.map((category,idx) => (
                                    <CommandItem key={idx} className="cursor-pointer">
                                        <Link
                                            href={`/search/${category.name}`}
                                            className=' p-2 flex gap-4'>
                                            <Image
                                                src={`http://localhost:1337${category?.icon[0]?.url}`}
                                                width={30}
                                                height={30}
                                                alt={category?.name}
                                                priority={true}
                                                style={{ height: "auto" }}
                                            />
                                            <label>{category?.name}</label>
                                        </Link>
                                    </CommandItem>
                            ))}
                        </CommandGroup>
                        
                    </CommandList>
                </Command>
        </div>
    )
}

export default CategoryList