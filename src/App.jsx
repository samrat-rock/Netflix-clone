import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

import Login from './Pages/Login/Login'


function App() {
  return (
    <>
         
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
           
          </Routes>    
          
    </>
  )
}

export default App
