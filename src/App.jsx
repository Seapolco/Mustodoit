import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import TodoForm from './components/TodoForm';
import MainContent from './components/MainContent';

function App() {


  const [showSidebar, setShowSidebar] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [allTodos, setAllTodos] = useState([])

  function Todo(title, description, priority, date, project) {
    this.title = title
    this.description = description
    this.priority = `Priority: ${priority}`
    this.date = date
    this.project = `Project: ${project}`
  }

  const addPomdoro = new Todo(
  'Pomdoro timer',
  'Create a pomdoro feature',
  'High',
  'Today',
  'Mustodoit'
  )




  


// May be redundant when functionality is resumed.

useEffect(() => {

  setAllTodos((prevTodos) => {
    let isDup = false;
    if(prevTodos) {
      prevTodos.forEach((e) => {
        if(e.title === 'Pomdoro timer') isDup = true;
      })
    }
    
    if(!isDup) {
      return[...prevTodos, addPomdoro]
    }
    else {
      return prevTodos
    }
  })


  localStorage.setItem('allTodos', JSON.stringify(allTodos))

},[allTodos])

 

 console.log(allTodos)

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
      <MainContent showForm={showForm} />
      </>
    )
}

export default App
