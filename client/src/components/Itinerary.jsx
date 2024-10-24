import React from 'react'
import { useNavigate , Link} from 'react-router-dom'
import Travel from './travel';


const Itinerary = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-full mt-11 bg-pink-200'>

        <section className='w-[100%] h-full  bg-white' >
            <div className="fixed top-12 left-0px h-10 w-56  flex gap-[2px]">
            <Link to='/dashboard/experience'>
                <button  className='w-[50%] h-full rounded-lg shadow-xl font-semibold text-xl' >
                        Experience
                </button>
            </Link>
            </div>
            <Travel/>
        
        </section>
      
    </div>
  )
}

export default Itinerary
