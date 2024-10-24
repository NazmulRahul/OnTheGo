import React from 'react'
import {Routes, Route} from 'react-router-dom'

const UserProfile = () => {
  return (
    <div className='h-full w-[30%]  flex flex-col justify-start items-center pt-[30px] gap-3 overflow-scroll'>
      <div className=" w-[150px] h-[150px] rounded-full bg-white">
        <img className='rounded-full w-full h-full' src="https://img.freepik.com/premium-photo/man-face-black-linear-cartoon-icon-user-isolated-white-background-ai-generated_1095381-16859.jpg?ga=GA1.1.1802669302.1717663847&semt=ais_hybrid" alt="" />
      </div>
      <p className='text-2xl'>Name</p>
      <section className='w-[80%] h-[360px] overflow-scroll bg-white flex flex-col items-center justify-start gap-2'>
               <div className=''>
                <p className='text-3xl font-semibold'>Visit your trips</p>
                <button className='w-[200px] h-[30px] rounded-2xl shadow-xl text-lg mt-2 font-medium hover:text-white hover:bg-black'>Plan new trip</button>
               </div>
               <div className="w-[80%] h-10 shadow-lg rounded-lg flex justify-center items-center text-md font-semibold">cox's bazar</div>
               <div className="w-[80%] h-10 shadow-lg rounded-lg flex justify-center items-center"></div>
               <div className="w-[80%] h-10 shadow-lg rounded-lg flex justify-center items-center"></div>
               
              
      </section>
    </div>
  )
}

export default UserProfile
