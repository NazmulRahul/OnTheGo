import React from 'react'
import { Link } from 'react-router-dom'
import ImageCard from './imageCard'

const Experiences = () => {
  return (
    <div className='fixed  w-full h-full flex flex-col justify-start items-center'>
      <p className='text-3xl font-semibold mb-5 mr-[40%]'>Save your memories</p>
      <Link to='/uploadimage' className='   mr-[40%] w-[130px]  h-8 font-semibold text-lg bg-indigo-500 opacity-75 hover:opacity-100 rounded-lg flex justify-center items-center'>Upload photos</Link>
      <section className=' flex flex-wrap gap-5 mr-[40%] ml-[80px] overflow-y-scroll mt-5 h-[440px]'>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
      </section>
    </div>
  )
}

export default Experiences
