"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const AddTestimonial = () => {
    const [bookingCode, setBookingCode] = useState("")
    const [room, setRoom] = useState("")

    useEffect(() => {
        switch (bookingCode) {
            case "#DR324":
                setRoom("Deluxe Room");
                break;
            case "#OVR324":
                setRoom("Ocean-View Room");
                break;
            case "#FS324":
                setRoom("Family Suite");
                break;
            case "#HS324":
                setRoom("Honeymoon Suite");
                break;
            case "#ES324":
                setRoom("Executive Suite");
                break;
            case "#GV324":
                setRoom("Garden Villa");
                break;
            case "":
                setRoom(""); // nothing typed yet
                break;
            default:
                setRoom("---");
        }
    }, [bookingCode]);

    return (
        <form action="" className=' w-[95%] mx-auto'>
            <h1 className=' text-xl text-center font-semibold text-[#745248] mb-[10px]'>Thank you so much for staying in Serenity Resort!</h1>
            <p>We trust you had a good time, would you mind leaving a review for us?</p>

            <div className=' w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-[30px]'>
                <div className=' w-full lg:w-[30%] mb-[10px]'>
                    <label
                        htmlFor=""
                        className=' block text-sm'
                    >
                        Booking Code
                    </label>
                    <input
                        type="text"
                        value={bookingCode}
                        onChange={(e) => {
                            setBookingCode(e.target.value)
                        }}
                        placeholder='Enter the booking code for your room'
                        className=' w-full focus:outline-none px-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                    />
                </div>

                <div className=' w-full lg:w-[30%] mb-[10px]'>
                    <label
                        htmlFor=""
                        className=' block text-sm'
                    >
                        Room Package (updates when you enter the booking code)
                    </label>
                    <input
                        type="text"
                        value={room}
                        placeholder='---'
                        className=' w-full focus:outline-none px-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                    />
                </div>

                <div className=' w-full lg:w-[30%] mb-[10px]'>
                    <label
                        htmlFor=""
                        className=' block text-sm'
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder='Enter the name you want on the testimonial'
                        className=' w-full focus:outline-none px-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                    />
                </div>
            </div>
            <div className=' w-full mb-[10px]'>
                <label
                    htmlFor=""
                    className=' block text-sm'
                >
                    Testimonial
                </label>
                <textarea
                    placeholder='Tell us your experience'
                    className=' w-full focus:outline-none px-2 border rounded-md border-[#745248] placeholder:text-[#745248]/40 text-[#745248]'
                />
            </div>
            <Link href={"/"}
              className=' w-fit block bg-[#745248]/70 bg-opacity-50 mx-auto backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:bg-transparent transition-all duration-300 text-white hover:text-black'
            >
              + Add testimonial
            </Link>
        </form>
    )
}

export default AddTestimonial