import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
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
                
                <div>
                    <Button>Get Started</Button>
                </div>
            </div>
        </>
    )
}

export default Header