"use client";
import React from 'react'
import { Lora } from 'next/font/google';
import Carousellle from '@/app/components/Carousel'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import helpers from '@/helpers/helpers';
import { features } from 'process';
import Link from 'next/link';
import { FadeInFromBottom } from '../components/FadeInFromBottom';

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const italiclora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['italic'],
});

const Hero = () => {
    return (
        <div id='home'>
            <div className=" mb-4 w-full h-screen flex items-center justify-center bg-[url('../assets/pexels-quang-nguyen-vinh-222549-3355732.jpg')] bg-no-repeat bg-right bg-[length:40vw_100vh]">
                <div
                    className=' absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[5] '
                >
                    <FadeInFromBottom>
                        <div className=' uppercase font-medium text-7xl tracking-[0.35em] flex flex-col gap-8'>
                            <h1 className={` ${lora.className} -translate-x-[150px]`}>TRANQUILITY</h1>
                            <div className=' translate-x-[100px] flex'>
                                <h1 className={` ${lora.className} flex-col flex`}>
                                    <span>PEACE</span>
                                    <p className=' text-xs leading-[1.9] translate-y-7 tracking-[0.2em]'>
                                        Serenity Resort, your ultimate destination for relaxation and luxury. Nestled in the heart of nature, our resort offers unparalleled comfort, exquisite dining and a host of activities to rejuvenate your body and soul.
                                    </p>
                                </h1>
                                <h1 className={` ${lora.className} text-black translate-x-[130px]`}>LUXURY</h1>
                            </div>
                        </div>
                    </FadeInFromBottom>
                </div>
            </div>

            <div
                className=" w-screen h-screen flex flex-col items-center justify-center mb-4"
            >
                <FadeInFromBottom>
                    <div className=' w-full h-[60vh] flex items-center justify-center'>
                        <div className=' uppercase font-medium w-full p-2'>
                            <h1 className={` ${lora.className} text-2xl mb-4 text-left tracking-[0.2em]`}>TRANQUILITY</h1>
                            <h1 className={` ${lora.className} text-2xl mb-4 text-right tracking-[0.2em]`}>peace and LUXURY</h1>
                            <p className=' w-[75%] m-auto text-xs leading-[1.9] translate-y-7 tracking-[0.2em]'>
                                Serenity Resort, your ultimate destination for relaxation and luxury. Nestled in the heart of nature, our resort offers unparalleled comfort, exquisite dining and a host of activities to rejuvenate your body and soul.
                            </p>
                        </div>
                    </div>
                </FadeInFromBottom>

                <div className=' h-[40vh] w-full home'></div>
            </div>
        </div>
    )
}

export default Hero