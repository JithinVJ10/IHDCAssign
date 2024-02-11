import React from 'react'
import membership from '../../assets/membership.jpg'

const NewArrival = () => {
  return (
    <>
      <div className='px-10'>
        <h1 className='text-4xl tracking-wide font-serif'>New Arrival</h1>
        <p className='underline font-mono'>JOIN TODAY</p>
        <div className='px-20'>
          <img src={membership} alt="" width={300}/>
        </div>
        <div className='py-2 px-14 md:px-32'>
            <button type='submit' class="bg-zinc-200 hover:bg-zinc-400 text-white font-bold py-2 px-4 border-2 border-black rounded-full w-48  ">
                <p className='bg-gradient-to-r from-teal-300 to-indigo-600 bg-clip-text text-transparent'>JOIN NOW</p>
            </button>
        </div>
      </div>
    </>
  )
}

export default NewArrival
