import { useState } from 'react'
import Home from './pages/home'
import ParentLayout from './components/parentLayout'
import { Route, Routes} from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' element={<ParentLayout/>} >
        <Route index element={}/>
      </Route>
    </Routes>
  )
}

export default App
