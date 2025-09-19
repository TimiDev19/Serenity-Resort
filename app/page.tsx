"use client";
import React from 'react'
import { Lora } from 'next/font/google';
import { FadeInFromBottom } from './components/FadeInFromBottom';
import { FadeInFromLeft } from './components/FadeInFromLeft';
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

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const italiclora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'],
});

const page = () => {
  return (
    <>
      <div className=' hidden lg:block w-[100vw] h-[100vh] scroll-smooth'>
        <div id='home' className=" mb-4 w-full h-screen flex items-center justify-center bg-[url('../assets/pexels-quang-nguyen-vinh-222549-3355732.jpg')] bg-no-repeat bg-right bg-[length:40vw_100vh]">
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

        <div className=' h-[20vh] px-10 mb-5'>
          <p className={`${lora.className} w-[35%] text-black text-xl font-semibold uppercase leading-[1.9] translate-y-7 tracking-[0.2em]`}>
            Our dedicated team is committed to prividing exceptional service, ensuring that each guest enjoys a personalized and memorable stay.
          </p>
        </div>

        <div id="about" className=' h-[100vh] flex flex-col items-end justify-end'>
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

        <div id='rooms' className=' h-[100vh] flex flex-col items-start justify-end'>
          <div className=' bg-transparent h-full w-[5%] z-[20] absolute mx-0'>
            <div className=' w-full h-[70%] flex flex-col items-center justify-between pt-8'>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] border-b-2 border-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>S</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>E</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>R</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>E</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>N</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>I</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>T</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-7xl mb-[50px]`}>Y</h1>
            </div>
          </div>

          <div className='hidden m-auto w-full h-[80vh] lg:flex items-center justify-center'>
            <Carousel className=' w-[70%] lg:w-[80%]'>
              <FadeInFromBottom>
                <CarouselContent className=' w-fit'>
                  {
                    helpers.rooms.map((rooms, index) => (
                      <CarouselItem key={index} className=' w-fit'>
                        <div className=' border border-[#745248] p-2 bg-white w-[70vw] mx-4 h-[60vh] flex lg:flex-row flex-col items-center justify-between'>
                          <div className={` ${lora.className} w-[45%] h-full text-left flex justify-center items-center`}>
                            <div className=' w-[90%]'>
                              <h1 className={` uppercase font-bold text-3xl mb-4`}>{rooms.name}</h1>
                              <p className=''>Features:</p>
                              <ul className=' list-inside list-disc mb-4'>
                                {
                                  rooms.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                  ))
                                }
                              </ul>

                              <p className=''>Amenities:</p>
                              <ul className=' list-inside list-disc mb-4'>
                                {
                                  rooms.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                  ))
                                }
                              </ul>
                              <Link href={`/rooms/${rooms.slug}`} className={`bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300`}>Book Room 🛏️</Link>
                            </div>
                          </div>
                          <div
                            style={{
                              backgroundImage: `url(${rooms.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className=' w-[45%] h-full'>
                          </div>
                        </div>
                      </CarouselItem>
                    ))
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </FadeInFromBottom>
            </Carousel>
          </div>
        </div>

        <div className={`${lora.className} h-[10vh] w-full`}>
          <FadeInFromLeft>
            <div className=' w-[85%] flex items-center justify-end pb-3 border-b border-[#745248]'>
              <p className={`${italiclora.className} w-[25%] text-3xl`}>
                We do not beleive in "stars" as a rating, we'd rather the customer explains their experience in detail so you can know excatly what they are talking about
              </p>
            </div>
          </FadeInFromLeft>
        </div>

        <div id='testimonials' className=' h-[120vh] flex flex-col items-end justify-end'>
          <div className=' bg-transparent h-full w-[5%] z-[50] absolute mx-0'>
            <div className=' w-full h-[70%] flex flex-col items-center justify-between pt-[250px]'>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black border-b-2 border-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>T</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>r</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>a</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>n</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>q</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>I</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>l</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>I</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>T</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-black opacity-[100%] font-thin uppercase text-7xl mb-[50px]`}>Y</h1>
            </div>
          </div>

          <div className=' h-[80vh] w-full flex flex-col items-center justify-center'>
            <Carousel className=' w-[70%] lg:w-[80%] mb-[50px]'>
              <FadeInFromBottom>
                <CarouselContent className=' w-fit'>
                  {
                    helpers.testimonials.map((test, index) => (
                      <CarouselItem key={index} className=' w-fit'>
                        <div className=' border border-[#745248] p-2 bg-white w-[70vw] mx-4 h-[60vh] flex flex-col items-center justify-center'>
                          <p className={` ${lora.className} w-[75%] mb-4`} >
                            "{test.review}"
                          </p>
                          <p className={` ${italiclora.className} font-semibold italic`}>- {test.name}</p>
                        </div>
                      </CarouselItem>
                    ))
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </FadeInFromBottom>
            </Carousel>
            <Link href={"/addTestimonial"}
              className=' bg-[#745248]/70 bg-opacity-50 backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:bg-transparent transition-all duration-300 text-white hover:text-black'
            >
              + Add your own testimonial
            </Link>
          </div>
        </div>

        <div id="tour" className=' h-[100vh] flex flex-col items-start justify-end'>
          <div className=' bg-transparent border-t border-[#745248] flex items-start justify-end h-full w-[90vw] -z-[20] absolute mx-8'>
            <div className=' w-[35%] flex items-center justify-center h-fit py-3 px-0'>
              <div className=' h-full w-full'>
                <FadeInFromLeft>
                  <p className={`${italiclora.className} w-full text-2xl text-[#745248]`}>
                    Welcome to Serenity Resort, where your journey into relaxation and luxury begins. As you explore, you'll discover serene ocean views, lush landscapes, and spaces designed for pure comfort. Take your time, immerse yourself in the beauty of our resort, and imagine the unforgettable experiences awaiting you. We're excited to share this little slice of paradise with you!
                  </p>
                </FadeInFromLeft>
              </div>
            </div>
          </div>

          <div className=" w-full h-[80vh] px-6">
            <FadeInFromBottom>
              <Carousellle />
            </FadeInFromBottom>
          </div>
        </div>

        <div id="contact" className=' h-[100vh] flex flex-col items-end justify-end'>
          <div className=' bg-transparent h-full w-[30%] z-[20] absolute mx-8'>
            <FadeInFromBottom>
              <div className=' w-full border border-[#745248] h-[70%] p-3'>
                <div className=' h-full w-full contact'></div>
              </div>
            </FadeInFromBottom>
          </div>

          <div className=" w-full h-[80vh] flex items-center justify-start contact-bg px-28 py-6">
            <FadeInFromLeft>
              <form className=' w-[50%]'>
                <h1 className={`${lora.className} font-light text-5xl mb-4 text-white`}>Contact Us</h1>
                <input type="text" className=' w-[45%] border-b border-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='First Name: (eg. Solomon)' />
                <input type="text" className=' w-[45%] border-b border-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='Last Name: (eg. Malik)' />
                <input type="text" className=' w-[45%] border-b border-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='Email: (eg. maliksolomon@gmail.com)' />
                <input type="text" className=' w-[45%] border-b border-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='Message' />
                <button className=' border border-white text-white px-4 bg-slate-100 bg-opacity-20 hover:bg-transparent duration-500'>Contact</button>
              </form>
            </FadeInFromLeft>
          </div>
        </div>
      </div>



      {/* MOBILE VIEW */}
      <div className=' lg:hidden w-[100vw] h-[100vh]'>
        <div
          id='home'
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

        <div className=' w-full flex items-center justify-between px-2'>
          <p className={`${lora.className} w-full text-black text-lg font-semibold uppercase leading-[1.9] translate-y-7 tracking-[0.2em]`}>
            Our dedicated team is committed to prividing exceptional service, ensuring that each guest enjoys a personalized and memorable stay.
          </p>
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

        <div
          id='rooms'
          className=' h-[100vh] flex flex-col items-start justify-end'
        >
          <div className=' bg-transparent h-full w-[5%] z-[20] absolute mx-0'>
            <div className=' w-full h-[70%] flex flex-col items-center justify-between pt-8'>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] border-b-2 border-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>S</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>E</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>R</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>E</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>N</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>I</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>T</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#745248] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>Y</h1>
            </div>
          </div>

          <div className=' ticket-bg m-auto w-full h-[80vh] flex items-center justify-center lg:hidden'>
            <Carousel className=' w-[70%] '>
              <FadeInFromBottom>
                <CarouselContent className=' w-fit'>
                  {
                    helpers.rooms.map((room, index) => (
                      <CarouselItem key={index} className='block lg:hidden w-fit'>
                        <div
                          style={{
                            backgroundImage: `linear-gradient(rgba(12, 13, 17, 0.7), rgba(15, 18, 29, 0.7)), url(${room.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          className='  w-[70vw] mx-4 h-fit p-3 maldives text-white flex items-center justify-between'>
                          <div className={` ${lora.className} w-[80%] h-full text-left flex justify-center items-center`}>
                            <div className=' w-[90%]'>
                              <h1 className={` uppercase font-bold text-xl mb-4`}>{room.name}</h1>
                              <p className=''>Features:</p>
                              <ul className=' list-inside list-disc mb-4'>
                                {room.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>

                              <p className=''>Amenities:</p>
                              <ul className=' list-inside list-disc mb-4'>
                                {room.amenities.map((amenity, index) => (
                                  <li key={index}>{amenity}</li>
                                ))}
                              </ul>
                              <Link href={`/rooms/${room.slug}`} className={`bg-slate-200 bg-opacity-50 backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:border-2 hover:bg-transparent transition-all duration-300`}>Book Room 🛏️</Link>
                            </div>
                          </div>

                        </div>
                      </CarouselItem>
                    ))
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </FadeInFromBottom>
            </Carousel>
          </div>

        </div>

        <div className={`${lora.className} h-fit w-full pr-2`}>
          <FadeInFromLeft>
            <div className=' w-full flex items-end justify-end pb-3 border-b border-[#745248]'>
              <p className={`${italiclora.className} w-[85%] text-2xl`}>
                We do not beleive in "stars" as a rating, we'd rather the customer explains their experience in detail so you can know excatly what they are talking about
              </p>
            </div>
          </FadeInFromLeft>
        </div>

        <div
          id='testimonials'
          className=' h-[100vh] flex flex-col items-start justify-end'
        >
          <div className=' bg-transparent h-full w-[5%] z-[20] absolute mx-0'>
            <div className=' w-full h-[70%] flex flex-col items-center justify-between pt-8'>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] border-b-2 border-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>t</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>r</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>A</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>N</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>q</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>I</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>L</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>I</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>T</h1>
              <h1 className={` ${lora.className} p-0 w-full text-center text-[#000] opacity-[55%] font-thin uppercase text-3xl mb-[50px]`}>Y</h1>
            </div>
          </div>

          <div className=' bg-white m-auto w-full h-[80vh] flex flex-col items-center justify-center lg:hidden'>
            <Carousel className=' w-[70%] mb-[30px] '>
              <FadeInFromBottom>
                <CarouselContent className=' w-fit'>
                  {
                    helpers.testimonials.map((test, index) => (
                      <CarouselItem key={index} className='block lg:hidden w-fit'>
                        <div
                          // style={{
                          //   backgroundImage: `linear-gradient(rgba(12, 13, 17, 0.7), rgba(15, 18, 29, 0.7)), url(${room.image})`,
                          //   backgroundSize: "cover",
                          //   backgroundPosition: "center",
                          // }}
                          className='  w-[60vw] mx-4 border border-[#745248] h-fit p-3 text-black flex items-center justify-between'>
                          <div className={` ${lora.className} w-[80%] max-h-[80vh] text-left flex justify-center items-center`}>
                            <div className=' w-[90%]'>
                              <p className=' text-xs mb-[20px]'>{test.review}</p>
                              <h1 className={` uppercase font-bold mb-4`}>- {test.name}</h1>
                            </div>
                          </div>

                        </div>
                      </CarouselItem>
                    ))
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </FadeInFromBottom>
            </Carousel>
            <Link href={"/addTestimonial"}
              className=' bg-[#745248]/70 bg-opacity-50 backdrop-blur-md font-bold py-1 px-4 border border-gray-500 hover:bg-transparent transition-all duration-300 text-white hover:text-black'
            >
              + Add your own testimonial
            </Link>
          </div>
        </div>

        <div id="tour" className={`${lora.className} h-fit w-full pr-2`}>
          <FadeInFromLeft>
            <div className=' w-full flex items-end justify-end pb-3 border-t border-[#745248]'>
              <p className={`${italiclora.className} w-[85%] text-2xl text-[#745248]`}>
                Welcome to Serenity Resort, where your journey into relaxation and luxury begins. As you explore, you'll discover serene ocean views, lush landscapes, and spaces designed for pure comfort. Take your time, immerse yourself in the beauty of our resort, and imagine the unforgettable experiences awaiting you. We're excited to share this little slice of paradise with you!
              </p>
            </div>
          </FadeInFromLeft>
        </div>

        <div className=" w-full h-[50vh] px-6">
          <FadeInFromBottom>
            <Carousellle />
          </FadeInFromBottom>
        </div>

        <div
          id='about'
          className=' h-[100vh] flex flex-col items-end justify-end bg-transparent mb-[100px]'
        >
          <div className=' bg-transparent h-full py-10 flex items-start justify-start w-[50%] z-[20] absolute mx-3'>
            <FadeInFromBottom>
              <div className=' w-full border border-[#EEE9DA] h-[40%] p-3'>
                <div className=' h-full w-full contact'></div>
              </div>
            </FadeInFromBottom>
          </div>

          <div className=" w-full h-[80vh] flex flex-col items-start justify-end contact-bg">
            <div className=' h-[60%] px-4'>
              <FadeInFromLeft>

                <form className=' w-[98%]'>
                  <h1 className={`${lora.className} font-light text-white text-5xl mb-4`}>Contact Us</h1>
                  <input type="text" className=' w-[100%] border-b border-white text-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='First Name: (eg. Solomon)' />
                  <input type="text" className=' w-[100%] border-b border-white text-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='Last Name: (eg. Malik)' />
                  <input type="text" className=' w-[100%] border-b border-white text-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='Email: (eg. maliksolomon@gmail.com)' />
                  <input type="text" className=' w-[100%] border-b border-white text-white bg-transparent py-2 placeholder:text-white placeholder:font-thin focus:outline-none placeholder:italic placeholder:text-sm block mb-4' placeholder='Message' />
                  <button className=' border border-white text-white px-4 bg-slate-100 bg-opacity-20 hover:bg-transparent duration-500'>Contact</button>
                </form>

              </FadeInFromLeft>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default page