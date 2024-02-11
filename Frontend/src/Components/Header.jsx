import React from 'react'
import realEstate from '../assets/real-estate-house.png'

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center m-3 bg-zinc-200 h-16'>
        <div className='px-4 md:px-8 lg:px-16'>
          <img src={realEstate} alt="realEstateImg" width={60} className="h-full" />
        </div>
        <div className='px-4 md:px-44 lg:pr-96 lg:mr-96 py-2'>
          <p className='text-base md:text-lg font-semibold'>
            XYZ SYSTEMS LLP.
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
