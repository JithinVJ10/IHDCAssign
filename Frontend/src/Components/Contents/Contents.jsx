import React from 'react'
import NewArrival from './NewArrival'
import ImageSlide from './ImageSlide'

const Contents = () => {
  return (
    <>
      <main className='flex px-10'>
        <div className='px-10'>
            <NewArrival/>
        </div>
        <div>
          <ImageSlide/>
        </div>
      </main>
    </>
  )
}

export default Contents
