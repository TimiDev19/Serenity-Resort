import React from 'react'
import { FadeInFromBottom } from '../components/FadeInFromBottom'
import AddTestimonial from '../components/AddTestimonial'

const page = () => {
    return (
        <div className=' pt-[100px]'>
            <FadeInFromBottom>
                <AddTestimonial />
            </FadeInFromBottom>
        </div>
    )
}

export default page