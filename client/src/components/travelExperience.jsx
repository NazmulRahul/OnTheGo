import React from 'react'
import { useNavigate , Link} from 'react-router-dom'

const TravelExperience = () => {
  const navigate = useNavigate();
  return (
    <section className='w-[100%] h-full  bg-white' >
        <div className="fixed top-12 left-0px h-10 w-56  flex gap-[2px]">
            <Link to='/dashboard/itinerary'>
                <button  className='w-[50%] h-full rounded-lg shadow-xl font-semibold text-xl' >
                        Itinerary
                </button>
            </Link>
        </div>
      
    </section>
  )
}

export default TravelExperience
