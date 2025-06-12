import React from 'react'
import SecSlider from '../Components/SecSlider'

export default function Slider() {
  return (
<div className=' w-full bg-[#EAF5FA] pb-10'>
<div className='flex lg:flex-row flex-col text-gray-800 '>
    <div className='lg:w-[55%] w-full'>
        <SecSlider/>
    </div>
    <div className='lg:w-[35%] w-full mt-10 p-10 space-y-10'>
        <p className='font-semibold'>SLIDER TEXT</p>
        <h1 className='font-bold text-4xl md:text-5xl'>What Students Say About Us</h1>
        <p className='font-semibold text-lg'>Minuteness of the parts</p>
        <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and .scrambled it to make a type specimen book</p>

    </div>
</div>
</div>
)
}