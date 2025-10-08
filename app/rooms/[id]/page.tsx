"use client"
import { FC, useState } from "react";
import { Lora, Nunito } from 'next/font/google'
import { useRouter } from "next/navigation";
import Link from "next/link";


const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '800', '900'],
});

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
});


interface ProductPageProps {
    params: { id: string };
}


export default function ProductPage({ params }: ProductPageProps) {
    const router =  useRouter()
    let roomName = ""
    if (params.id === "deluxe-room") {
        roomName = "Deluxe Room";
    } else if (params.id === "Ocean-view-Room") {
        roomName = "Ocean-view Room";
    } else if (params.id === "Family-Suite") {
        roomName = "Family Suite";
    } else if (params.id === "Honeymoon-Suite") {
        roomName = "Honeymoon Suite";
    } else if (params.id === "Executive-Suite") {
        roomName = "Executive Suite"
    } else if (params.id === "Garden-Villa") {
        roomName = "Garden Villa"
    } else {
        roomName = "Unknow Error Occured";
    }

    const submitForm = () => {
        router.push("/rooms/sucess")
    }
 
    return (
        <div className={` ${nunito.className} bg-about h-[100vh] w-[100vw] flex flex-col items-center justify-center text-black overflow-y-scroll pt-[100px]`}>
            <h1 className=" text-2xl w-[90%] lg:text-4xl text-white block mb-[30px] text-center">Hi, welcome to the booking section</h1>

            <form action=""
                className=" w-[90%] min-h-[50vh] bg-white rounded-2xl shadow-sm shadow-black p-[2.5%]"
            >
                <h1 className=" text-3xl">Serenity Resort Booking Form</h1>
                <p className=" mb-[10px]">Enter your details below to book the <span className=" font-semibold">{roomName}</span> at Serenity Resort</p>
                <div className=" w-full flex flex-col lg:flex-row items-center justify-between mb-[20px]">
                    <div className=" w-[90%] lg:w-[45%] h-full">
                        <div className=" mb-[10px]">
                            {/* <label htmlFor="" className=" text-sm block mb-1">Room</label> */}
                            <input type="text" value={roomName} className=" border border-[#745248] p-2 rounded-md focus:outline-none w-full" />
                        </div>

                        <div className=" mb-[10px]">
                            <label htmlFor="" className=" text-sm block mb-1">First Name</label>
                            <input type="text" className=" border border-[#745248] p-2 rounded-md focus:outline-none w-full"
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div className=" mb-[10px]">
                            <label htmlFor="" className=" text-sm block mb-1">Last Name</label>
                            <input type="text" className=" border border-[#745248] p-2 rounded-md focus:outline-none w-full"
                                placeholder="Enter your Last name"
                            />
                        </div>
                    </div>

                    <div className=" w-[90%] lg:w-[45%] h-full">
                        <div className=" mb-[10px]">
                            <label htmlFor="" className=" text-sm block mb-1">Start Date</label>
                            <input type="date" className=" border border-[#745248] p-2 rounded-md focus:outline-none w-full" />
                        </div>

                        <div className=" mb-[10px]">
                            <label htmlFor="" className=" text-sm block mb-1">End Date</label>
                            <input type="date" className=" border border-[#745248] p-2 rounded-md focus:outline-none w-full"
                            />
                        </div>

                        <div className=" mb-[10px]">
                            <label htmlFor="" className=" text-sm block mb-1">Mobile Number</label>
                            <input type="number" className=" border border-[#745248] p-2 rounded-md focus:outline-none w-full"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                    </div>
                </div>
                <Link href={"/rooms/sucess"} onClick={submitForm} className=" w-fit rounded-full mx-auto block bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:border hover:bg-transparent transition-all duration-300">Book Room 🛏️</Link>
            </form>
        </div>

    );
}
