import { CheckIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-white h-[100vh] w-[100vw] flex flex-col items-center justify-center'>
        <h1 className=' text-4xl text-green-500 mb-[10px]'>Your room has been booked sucessfully!</h1>
        <Link href={"/"} className=' py-2 px-[50px] bg-green-500 rounded-xl text-white font-semibold'>Proceed</Link>
    </div>
  )
}

export default page