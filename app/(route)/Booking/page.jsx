"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyBookingList from './_components/MyBookingList'
import Api from '@/app/_utils/Api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

const MyBooking = () => {

    // to get user data
    const { user } = useKindeBrowserClient();

    const [ bookingList,setBookingList ] = useState([]);

    const filterBookingList = (type) => {
        return bookingList.filter((item) => {
            return type === "upcoming" 
                ? new Date(item.date) >= new Date()
                : new Date(item.date) <= new Date();
        });
    };


    useEffect(() => {
        user && userBookingList();
    },[user])

    // this method that response to show booking list info after each updating in database
    const userBookingList = () => {
        Api.bookInformation(user?.email)
        
        .then((res) => {
            setBookingList(res.data.data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    return (
        <div className='w-full my-5'>
            <h2 className='text-center capitalize font-semibold'><span className='text-lime-500'>booking</span>  information</h2>

            <Tabs defaultValue="account" className="w-full mt-5">            
                <TabsList className="w-full">
                    <TabsTrigger value="UpComing">Up Coming</TabsTrigger>
                    <TabsTrigger value="Passed">Passed</TabsTrigger>
                </TabsList>
                <TabsContent value="UpComing">
                    <MyBookingList
                        updateAppointment={() => userBookingList()}
                        past={false} bookingList={filterBookingList("upcoming")} />
                </TabsContent>
                <TabsContent value="Passed">
                    <MyBookingList
                        updateAppointment={() => userBookingList()}
                        past={true}  bookingList={filterBookingList("past")}/>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBooking