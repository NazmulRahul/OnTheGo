import { useState } from 'react'
import Home from './pages/home'
import { Route, Routes} from 'react-router-dom'
import ParentLayout from './components/parentLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import NewTrip from './components/NewTrip'
function App() {

  return (
    <Routes>
      <Route path='/' element={<ParentLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='new-trip' element={<NewTrip/>}/>

      </Route>
    </Routes>
  )
}

export default App
