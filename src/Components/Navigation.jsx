import React from 'react'
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>

    <div className='bg-half-transparent  shadow-2xl mt-4 flex justify-center align-content-center  z-0 pt-3 pb-3 text-[20px] flex-wrap  gap-10 text-white  text-center'>
    <a href="#home"><span className='hover:text-cyan-600'>Home</span></a>
    <a href="#skill-section"><span className='hover:text-cyan-600'>Skill</span></a>
   <a href="#project"><span className='hover:text-cyan-600'>Projects</span></a> 
    </div>
    <div>
        <Outlet/>
            </div>
    </>
  )
}

export default Navigation