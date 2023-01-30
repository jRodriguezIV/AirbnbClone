import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <h1>I Am Banner</h1>
        <Image 
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        />
        <div className='text-black absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'> Not sure where to go? Perfect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duraction-150'>I&apos;m Flexible</button>
        </div>
    </div>
  )
}

export default Banner