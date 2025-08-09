"use client"

import React, { useEffect, useState } from 'react'

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Api from '@/app/_utils/Api'
import { toast } from "sonner"

const BookingAppointment = ({doctor}) => {

    const [date,setDate] = useState(new Date());
    const [ timeSlot , setTimeSlot ] = useState();
    const [selectedTime,setSelectedTime] = useState();

    const { user } = useKindeBrowserClient();

    // bookAppointment
    useEffect(() => {
        getTime();
    },[]);

    const booking = () => {
        const data = {
            // userName [ fields in strapi that required data from user that login]
            data: {
                userName: user.given_name + " " + user.family_name,
                email:user.email,
                date:date,
                time:selectedTime,
                doctor:doctor.documentId,
            }
        }

        Api.bookAppointment(data)
        .then((res) => {
            if(res){
                console.log('success response: ',res);
                toast.success('Your appointment sent successfully');
            }
        }).catch((error) => {
            console.log('error in booking:\n',error.message)
            toast.error('Sorry, there is an error in request, please try again later!')
        })

    }

    const getTime = () => {
        const timeList = [];

        for(let i = 10 ; i <= 12 ; i++ ){
            
            timeList.push({
                time: i + ":00 AM"
            })

            timeList.push({
                time: i + ":30 AM"
            })
        }
        
        for(let i = 1 ; i <= 5 ; i++ ){
            
            timeList.push({
                time: i + ":00 PM"
            })

            timeList.push({
                time: i + ":30 PM"
            })
        }
        
        setTimeSlot(timeList);
    }

    // day - that be build-in and related with shadcn library
    const pastDay = (day) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // تصفير الوقت
        return day < today;
    };

    return (
        <Dialog>
            <DialogTrigger>
                <span className='bg-lime-600 cursor-pointer px-5 py-2 text-lime-100 rounded-2xl'>Booking Appointment</span>
            </DialogTrigger>
            
            <DialogContent>

                <DialogHeader>
                    <DialogTitle className="my-3">Book Appointment</DialogTitle>

                    <div className='flex md:flex-row flex-col items-center justify-between gap-5'>
                        <div className='md:self-start'>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-lg border"
                                disabled={pastDay}
                            />
                        </div>

                        <div>
                            <div className='grid grid-cols-2 gap-3'>
                                {timeSlot?.map((info,idx) => (
                                    <h2 
                                    onClick={() => setSelectedTime(info.time)}
                                    className={`hover:text-white duration-300 hover:bg-lime-600 transition-all cursor-pointer p-2 border rounded-full ${info.time === selectedTime && "bg-lime-500 text-white"} `}
                                    key={idx}> {info.time}</h2>
                                ))}
                            </div>
                        </div>

                    </div>
                    
                    <DialogDescription className="w-full mt-2">
                        <Button 
                        onClick={() =>booking()}
                        disabled={ !(date && selectedTime)} className="w-full cursor-pointer capitalize">booking now</Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default BookingAppointment