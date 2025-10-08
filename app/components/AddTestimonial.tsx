"use client"
import { Nunito } from 'next/font/google';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '800', '900'],
});



const AddTestimonial = () => {
    const [bookingCode, setBookingCode] = useState("")
    const [room, setRoom] = useState("")

    useEffect(() => {
        switch (bookingCode) {
            case "#DR324":
                setRoom("Deluxe Room");
                break;
            case "#dr324":
                setRoom("Deluxe Room");
                break;
            case "#OVR324":
                setRoom("Ocean-View Room");
                break;
            case "#ovr324":
                setRoom("Ocean-View Room");
                break;
            case "#FS324":
                setRoom("Family Suite");
                break;
            case "#fs324":
                setRoom("Family Suite");
                break;
            case "#HS324":
                setRoom("Honeymoon Suite");
                break;
            case "#hs324":
                setRoom("Family Suite");
                break;
            case "#ES324":
                setRoom("Executive Suite");
                break;
            case "#es324":
                setRoom("Family Suite");
                break;
            case "#GV324":
                setRoom("Garden Villa");
                break;
            case "#gv324":
                setRoom("Family Suite");
                break;
            case "":
                setRoom(""); // nothing typed yet
                break;
            default:
                setRoom("---");
        }
    }, [bookingCode]);

    return (
        <div className={` ${nunito.className} bg-about w-[100dvw] h-[100dvh] mx-auto pt-[100px] flex flex-col items-center justify-center`}>
            <h1 className=' text-3xl text-center font-semibold text-[#fff] mb-[10px]'>Thank you so much for staying in Serenity Resort!</h1>

            <div className=' w-[85%] p-[10px] rounded-xl bg-white flex flex-col items-start justify-center'>
                <p className=' text-[#745248] uppercase mb-[20px]'>We trust you had a good time, would you mind leaving a review for us?</p>

                <form
                    action=""
                    className=' flex flex-col items-start justify-center w-full'
                >
                    <div className=' w-full flex items-center justify-between mb-[20px]'>
                        <input
                            type="text"
                            value={bookingCode}
                            onChange={(e) => {
                                setBookingCode(e.target.value)
                            }}
                            placeholder='Enter the booking code for your room'
                            className=' w-[45%] uppercase focus:outline-none p-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                        />

                        <input
                            type="text"
                            value={room}
                            placeholder='Room Package (updates when you enter the booking code)'
                            className=' w-[45%] uppercase focus:outline-none p-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                        />
                    </div>

                    <div className=' w-full flex items-center justify-between mb-[20px]'>
                        <input
                            type="text"
                            placeholder='Enter the name you want on the testimonial'
                            className=' w-[45%] uppercase focus:outline-none p-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                        />

                        <input
                            type="email"
                            placeholder='email (optional)'
                            className=' w-[45%] uppercase focus:outline-none p-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                        />
                    </div>

                    <textarea name="" id="" aria-cols="30" aria-rows="500"
                        placeholder='Tell us about your experience'
                        className=' w-[100%] min-h-[300px] focus:outline-none p-2 placeholder:uppercase border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248] mb-[20px]'
                    ></textarea>

                    <Link href={"/"}
                        className=' w-fit block bg-[#745248]/70 bg-opacity-50 mx-auto backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:bg-transparent transition-all duration-300 text-white hover:text-black'
                    >
                        + Add testimonial
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default AddTestimonial