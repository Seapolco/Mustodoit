import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TodoForm from './components/TodoForm';

function App() {

  let [showSidebar, setShowSidebar] = useState(false);
  let [showForm, setShowForm] = useState(false)

  function handleNavClick () {
    console.log("In the APP")
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }
  
  function handleNewClick() {
    setShowForm(!showForm)
  }

  
    return (
      <>
      <Navbar handleNavClick={handleNavClick} handleNewClick={handleNewClick}  />
      <Sidebar showSidebar={showSidebar}/>
      <TodoForm showForm={showForm}/>
      </>
    )
}

export default App
