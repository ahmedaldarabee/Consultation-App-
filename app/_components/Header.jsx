import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const Menu = [
        {
            id:1,
            name:"Home",
            path:"/"
        },{
            id:2,
            name:"Explore",
            path:"/"
        },{
            id:3,
            name:"Contact Us",
            path:"/"
        }
    ]

    return (
        <>
            <div className='flex items-center gap-10'>
                <Image 
                    alt='logo image'
                    src={"/assets/logo.png"}
                    width={100}
                    height={100}
                />
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            
            <Button>Get</Button>
        </>
    )
}

export default Header