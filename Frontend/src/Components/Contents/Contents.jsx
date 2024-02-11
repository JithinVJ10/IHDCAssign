import React from 'react'
import NewArrival from './NewArrival'
import ImageSlide from './ImageSlide'

const Contents = () => {
  return (
    <>
      <main className='flex flex-col md:flex-row px-4 md:px-10'>
        <div className='mb-8 md:mr-4'>
          <NewArrival />
        </div>
        <div className='md:ml-4'>
          <ImageSlide />
        </div>
      </main>
    </>
  )
}

export default Contents