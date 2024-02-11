import React from 'react'
import CarouselDefault from '../../Page/CarouselDefault'


const ImageSlide = () => {
  return (
    <>
    <div className='py-5 px-44'>
      <h1 className='text-4xl text-emerald-600'>Unlock Premium Features Now</h1>
    </div>
    <div>
        <CarouselDefault/>
    </div>
    <div>
        <div className='py-5 px-60'>
            <button type='submit' class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full w-96">
                UNLOCK NOW
            </button>
        </div>
        <div className='px-60'>
            <button type='submit' class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full w-96">
                DETAILS
            </button>
        </div>
    </div>
    </>
  )
}

export default ImageSlide
