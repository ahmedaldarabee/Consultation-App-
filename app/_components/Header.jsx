"use client";

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import { Popover, PopoverContent,PopoverTrigger,} from "@/components/ui/popover"

const Header = () => {
    
    const { user } = useKindeBrowserClient();

    const Menu = [
        {
            id:1,
            name:"Home",
            path:"/"
        },{
            id:2,
            name:"Explore",
            path:"/explore"
        },{
            id:3,
            name:"Contact Us",
            path:"/contact"
        }
    ]

    return (
        <>
            <div className='shadow-sm cursor-pointer flex items-center gap-10 justify-between p-3'>
                <div className='flex items-center gap-8'>
                    <Image 
                        alt='logo image'
                        src={"/assets/logo.png"}
                        width={100}
                        height={100}
                        priority={true}
                    />

                    <ul className='md:flex gap-8 hidden'>
                        {Menu.map((item) => (
                            <Link 
                                key={item.id} href={item.path}>
                                <li className='hover:text-lime-600 hover:underline transition-all duration-400'> {item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                
                <div className='flex gap-5'>
                    
                    {   
                        user ? 
                            (
                                <>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Image 
                                                src={user.picture}
                                                alt={`${user.given_name} picture`}
                                                width={40}
                                                height={40}
                                                priority={true}
                                                style={{ height: "auto" }}
                                                className='rounded-full cursor-pointer hover:scale-110 hover:rotate-6 transition-all ease-in-out'
                                            />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-40 py-2">
                                            <ul className='flex flex-col gap-4 cursor-pointer'>
                                                <li className='hover:underline' >My profile</li>
                                                <li className='hover:underline' >My booking</li>
                                                <li className='hover:underline' > <LogoutLink>Log out</LogoutLink> </li>
                                            </ul>
                                        </PopoverContent>
                                    </Popover>
                                </>
                            )
                            : 
                            
                            <LoginLink>
                                <Button>Sign In</Button>
                            </LoginLink>
                    }
                </div>
            </div>
        </>
    )
}

export default Header