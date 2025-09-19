import React from 'react'
import { FadeInFromBottom } from '../components/FadeInFromBottom'
import { FadeInFromLeft } from '../components/FadeInFromLeft'
import { Lora } from 'next/font/google';

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const About = () => {
  return (
    <div id='about'>
        <div className=' h-[100vh] flex flex-col items-end justify-end'>
          <div className=' bg-transparent h-full w-[30%] z-[20] absolute mx-8'>
            <FadeInFromBottom>
              <div className=' w-full border border-[#EEE9DA] h-[70%] p-3'>
                <div className=' h-full w-full bg-promo1'></div>
              </div>
            </FadeInFromBottom>
          </div>
          <div className=" w-full h-[80vh] flex items-center justify-start bg-about px-28">
            <FadeInFromLeft>
              <p className={`${lora.className} w-[40%] text-[#EEE9DA] text-md uppercase leading-[1.9] translate-y-7 tracking-[0.2em]`}>
                At Serenity Resort we beleive in creating a sanctuary where luxury and tranquility coexist. Our resort is designed to offer a serene escape from the daily grind, nestled amidst breathtaking natural beauty. With elegantly appointed accomodations, gourmet dining experiences and a wide array of recreational activities, we cater to your every need.
              </p>
            </FadeInFromLeft>
          </div>
        </div>

        <div
          id='about'
          className=' h-[100vh] flex flex-col items-end justify-end bg-transparent mb-[100px]'
        >
          <div className=' bg-transparent h-full py-10 flex items-start justify-start w-[50%] z-[20] absolute mx-3'>
            <FadeInFromBottom>
              <div className=' w-full border border-[#EEE9DA] h-[40%] p-3'>
                <div className=' h-full w-full bg-promo1'></div>
              </div>
            </FadeInFromBottom>
          </div>

          <div className=" w-full h-[80vh] flex flex-col items-end justify-end bg-about">
            <div className=' h-[60%] px-4'>
              <FadeInFromLeft>
                <p className={`${lora.className} w-[90%] text-[#EEE9DA] text-sm uppercase tracking-[0.2em]`}>
                  At Serenity Resort we beleive in creating a sanctuary where luxury and tranquility coexist. Our resort is designed to offer a serene escape from the daily grind, nestled amidst breathtaking natural beauty. With elegantly appointed accomodations, gourmet dining experiences and a wide array of recreational activities, we cater to your every need.
                </p>
              </FadeInFromLeft>
            </div>

          </div>
        </div>
    </div>
  )
}

export default About