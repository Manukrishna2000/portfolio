import React from 'react'
import ac from '../ac.jpg'
import organic from '../organic.png'
export const Body = () => {
  return (
    <div className='flex justify-evenly mt-20 body-content gap-3 flex-wrap p-4 '>
      <div className='bg-transparent   text-white shadow-2xl rounded-md text-center p-4 h-[300px] w-fit'>
        <img src={ac} className='rounded-md' width='350px' alt="" />
        <div className='text-[30px]'>Autocar</div>
      </div>

      <div className='bg-transparent     text-white shadow-2xl rounded-md text-center p-4 h-[300px] w-fit'>
        <img src={organic} className='rounded-md' width='350px' height='350px' alt="" />
        <div className='text-[30px]'>Organico</div>
      </div>

      <div className='bg-transparent     text-white shadow-2xl rounded-md text-center p-4 h-[300px] w-fit'>
        <img src={ac} className='rounded-md' width='350px' alt="" />
        <div className='text-[30px]'>Autocar</div>
      </div>
    </div>
  )
}
