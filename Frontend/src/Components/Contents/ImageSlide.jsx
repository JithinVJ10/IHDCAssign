import React from 'react'
import CarouselDefault from './CarouselDefault'

const ImageSlide = () => {
  return (
    <>
      <div className='py-5 px-4 md:px-8 lg:px-20'>
        <h1 className='text-4xl text-emerald-600 text-center'>Unlock Premium Features Now</h1>
      </div>
      <hr />

      <div>
        <CarouselDefault />
      </div>
      <div className='py-5 px-4 md:px-8 lg:px-20 flex flex-col items-center'>
        <button type='submit' className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-8 md:px-12 rounded-full mb-4 w-full md:w-96">
          UNLOCK NOW
        </button>
        <button type='submit' className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-8 md:px-12 rounded-full w-full md:w-96">
          DETAILS
        </button>
      </div>
    </>
  )
}

export default ImageSlide
