import React from 'react'
import { Link } from 'react-router-dom'


const Welcome = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center mt-16 pb-6">
        <section className='w-[90%] h-[400px] flex flex-col justify-start  items-center'>

        <h1 className='text-5xl font-bold'>One app for all your travel planning needs</h1>
            <p className='mt-7 text-2xl'>Create detailed itineraries, explore user-shared guides, and manage your</p>
            <p className='mt-2 text-2xl'>bookings seamlessly — all in one place.</p>
            <Link className='rounded-2xl mt-6 h-[50px] w-[150px] bg-red-500 flex items-center justify-center text-2xl font-semibold'>Start Planing</Link>
        </section>
        <section className='flex flex-row  w-full h-[350px] px-[10%] gap-5 '>
            <div  className="w-[40%] h-full rounded-2xl" >
                <img className='h-full w-full object-fill rounded-2xl' src="https://images.unsplash.com/photo-1665651147145-664ebda525e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNveCUyMGJhemFyJTIwc2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D" alt="random" />
            </div>
            <div className="w-[60%] h-full flex  flex-col justify-start items-start">
                <h1 className='text-3xl font-bold'>Explore user-shared guides</h1>
                <p className='mt-7 text-xl'>Travel is essential for temporary relief from extra work stress and anxiety. The practical aspect of travel is that people can enjoy the taste of innovation and gain various experiences. Then this experience and journey becomes a memory and makes smile or nostalgic. It is possible to learn about people and their culture through travel. Many unknown things become known. When the busy life of the city, anxiety, frustration, fatigue make life miserable, then the view of mountains, clouds, waterfalls brings peace to the mind. People who like to travel, always prefer quiet, secluded places. Mountains can be an interesting place for travel. One such beautiful place is Sajek Valley in Bangladesh. Sajek Valley is famous for its natural beauty and is also known as the Queen of Hills and Roof of Rangamati. Where the mind and soul get the feeling of heaven. There is no human noise but there is the melody of birds, the flow of fountains. Sometimes rows of clouds are running, sometimes playing hide and seek. This scene creates a different kind of love.</p>

            </div>
        </section>
        <section className='flex flex-row  w-full h-[350px] px-[10%] gap-5 mt-8'>
            <div className="w-[60%] h-full flex  flex-col justify-start items-end">
                <h1 className='text-3xl font-bold'>Explore user-shared guides</h1>
                <p className='mt-7 text-xl'>Find inspiration for your next trip and discover hidden gems with our community-curated guides.</p>
            </div>
            <div  className="w-[30%] h-full rounded-2xl" >
                <img className='h-full w-full object-fill rounded-2xl' src="https://images.unsplash.com/photo-1589307357647-4e11b161a2b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhamVrfGVufDB8fDB8fHww" alt="random" />
            </div>
        </section>
    </div>
  )
}

export default Welcome
