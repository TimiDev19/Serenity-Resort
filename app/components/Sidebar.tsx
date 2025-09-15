"use client"
import { useState } from 'react';
import { Nunito } from 'next/font/google'
import Logo from '@/assets/logo.png'
import Image from 'next/image';
// import { FadeInFromTop } from './FadeInFromTop';
import { Lora } from 'next/font/google';
import { motion } from "framer-motion";
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';


const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

      <div className='z-50 fixed w-full bg-opacity-50 backdrop-blur-md'>
        {/* <FadeInFromTop> */}
          <div className={` ${nunito.className} bg-slate-800 px-8 py-4 flex items-center justify-between text-white w-full bg-opacity-50 backdrop-blur-md`}>
            <div className=' flex items-center justify-center flex-col text-center'>
              <Image
                src={Logo}
                height={20}
                alt='Company Logo'
              />
              <h3 className=' text-lg uppercase '>serenity</h3>
            </div>

            <div className=' lg:hidden'>
              {/* Button to toggle the sidebar */}
              <button
                onClick={toggleSidebar}
                style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
              >
                {isOpen ? <Cross1Icon className='text-5xl' /> : <HamburgerMenuIcon className=' height-[400px] text-5xl' />}
              </button>

              {/* Sidebar motion component */}
              <motion.div
                initial={{ width: 0 }} // Initial width of sidebar when closed
                animate={{ width: isOpen ? 300 : 0 }} // Animate to width 300px when open
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.5,
                }} // Smooth transition
                style={{
                  height: "100vh",
                  backgroundColor: "#fff",
                  color: "black",
                  overflow: "hidden",
                  position: "fixed",
                  top: 0,
                  left: 0,
                }}
                className=' shadow-md shadow-black'
              >
                {/* Sidebar content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ padding: "20px" }}
                >
                  <div className=' flex w-full items-center justify-between mb-8'>
                    <h3 className=' text-lg uppercase '>serenity</h3>
                    <button
                      onClick={toggleSidebar}
                      style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                    >
                      {isOpen ? <Cross1Icon className='text-5xl' /> : " "}
                    </button>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li className=' uppercase text-sm mb-6 hover:text-slate-500 hover:underline duration-200 tracking-[0.3em]'><a href='/#home'>Home</a></li>
                    <li className=' uppercase text-sm mb-6 hover:text-slate-500 hover:underline duration-200 tracking-[0.3em]'><a href='/#about'>About</a></li>
                    <li className=' uppercase text-sm mb-6 hover:text-slate-500 hover:underline duration-200 tracking-[0.3em]'><a href='/#rooms'>Catalogue / Rooms</a></li>
                    <li className=' uppercase text-sm mb-6 hover:text-slate-500 hover:underline duration-200 tracking-[0.3em]'><a href='/#testimonials'>Testimonials</a></li>
                    <li className=' uppercase text-sm mb-6 hover:text-slate-500 hover:underline duration-200 tracking-[0.3em]'><a href='/#tour'>Tour</a></li>
                    <li className=' uppercase text-sm mb-6 hover:text-slate-500 hover:underline duration-200 tracking-[0.3em]'><a href='/#contact'>Contact</a></li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            <div className=' hidden lg:block'>
              <ul className='flex items-center cursor-pointer'>
                <li className=' hover:tracking-[0.5em] cursor-pointer uppercase text-sm mx-5 hover:text-black duration-200 tracking-[0.3em]'><a href='/#home'>Home</a></li>
                <li className=' hover:tracking-[0.5em] cursor-pointer uppercase text-sm mx-5 hover:text-black duration-200 tracking-[0.3em]'><a href='/#about'>About</a></li>
                <li className=' hover:tracking-[0.5em] cursor-pointer uppercase text-sm mx-5 hover:text-black duration-200 tracking-[0.3em]'><a href='/#rooms'>Catalogue / Rooms</a></li>
                <li className=' hover:tracking-[0.5em] cursor-pointer uppercase text-sm mx-5 hover:text-black duration-200 tracking-[0.3em]'><a href='/#testimonials'>Testimonials</a></li>
                <li className=' hover:tracking-[0.5em] cursor-pointer uppercase text-sm mx-5 hover:text-black duration-200 tracking-[0.3em]'><a href='/#tour'>Tour</a></li>
                <li className=' hover:tracking-[0.5em] cursor-pointer uppercase text-sm mx-5 hover:text-black duration-200 tracking-[0.3em]'><a href='/#contact'>Contact</a></li>
              </ul>
            </div>
          </div>
        {/* </FadeInFromTop> */}
      </div>
    </div>
  )
}