import { useState } from 'react'
import Home from './pages/home'
import { Route, Routes} from 'react-router-dom'
import ParentLayout from './components/parentLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTrip from './components/NewTrip'
import DashBoardLayout from './pages/usersDashboard'
import TripDescription from './components/tripDescription'
import Itinerary from './components/Itinerary'
import TravelExperience from './components/travelExperience'
import Blog from './components/blog'


import { useState } from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import ParentLayout from "./components/parentLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTrip from "./components/NewTrip";
import DashBoardLayout from "./pages/usersDashboard";
import TripDescription from "./components/tripDescription";
import Itinerary from "./components/Itinerary";
import TravelExperience from "./components/travelExperience";
import ImageUpload from "./components/ImageUpload";

function App() {

  return (
    <Routes>
      <Route path='/' element={<ParentLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='newtrip' element={<NewTrip/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='new-trip' element={<NewTrip/>}/>
        <Route path='dashboard' element={<DashBoardLayout/>}>
          <Route index element={<TripDescription/>}/> 
          <Route path='itinerary' element={<Itinerary/>}/>
          <Route path='experience' element={<TravelExperience/>}/> 
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
