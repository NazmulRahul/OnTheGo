import { useState } from 'react'
import Home from './pages/home'
import ParentLayout from './components/parentLayout'
import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
function App() {

  return (
    <Routes>
      <Route path='/' element={<ParentLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default App
