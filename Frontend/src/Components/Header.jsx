import React from 'react'
import realEstate from '../assets/real-estate-house.png'

const Header = () => {
  return (
    <>
      <header className='flex m-3 bg-zinc-200 h-16'>
        <div className='px-60'>
            <img src={realEstate} alt="realEstateImg" width={90} />
        </div>
        <div className='px-40 py-5'>
            <p className='text-lg font-semibold'>
                XYZ SYSTEMS LLP.
            </p>
        </div>

      </header>
    </>
  )
}

export default Header
