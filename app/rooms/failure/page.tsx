"use client"
import Link from 'next/link'
import React, { useState } from 'react'

interface FailureProps {
  name: String
}

const Failure = ({ name }) => {
  return (
    <div className=' bg-white h-[100vh] w-[100vw] flex flex-col items-center justify-center'>
      <h1 className=' text-4xl text-green-500 mb-[10px]'>An unknown error has occured!</h1>
      <Link href={"/"} className=' py-2 px-[50px] bg-green-500 rounded-xl text-white font-semibold'>Retry name</Link>
    </div>
  )
}

export default Failure