import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'

function App() {

  let [showSidebar, setShowSidebar] = useState(false)

  function handleClick () {
    console.log("In the APP")
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }

  
    return (
      <>
      <Navbar handleClick={handleClick} />
      <Sidebar showSidebar={showSidebar}/>
      </>
    )
}

export default App
