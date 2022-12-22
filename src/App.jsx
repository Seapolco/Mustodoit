import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TodoForm from './components/TodoForm';

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


  // Update the state with any existing local storage todos.

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem('allTodos'));
    if (localStorageTodos) {
     setAllTodos(localStorageTodos);
    }
  }, []);

  /// TEST

  const addPomdoro = new Todo(
    'Pomdoro timer',
    'Create a pomdoro feature',
    'High',
    'Today',
    'Mustodoit'
    )

 useEffect(() => {

  setAllTodos((prevTodos) => [...prevTodos, addPomdoro])
    
 }, [])

 // May be redundant when functionality is resumed.

 useEffect(() => {
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
      <TodoForm showForm={showForm}/>
      </>
    )
}

export default App
