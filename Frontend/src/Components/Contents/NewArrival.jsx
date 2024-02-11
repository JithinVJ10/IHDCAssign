import React from 'react'
import membership from '../../assets/membership.jpg'

const NewArrival = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl'>New Arrival</h1>
        <p className='underline'>JOIN TODAY</p>
        <div>
          <img src={membership} alt="" width={300}/>
        </div>
        <div className='py-4'>
            <button type='submit' class="bg-zinc-200 hover:bg-zinc-400 text-white font-bold py-2 px-4 border-2 border-black rounded-full w-96 ">
                JOIN NOW
            </button>
        </div>
      </div>
    </>
  )
}

export default NewArrival
