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

  const localTodos = JSON.parse(localStorage.getItem('allTodos'))

  const [allTodos, setAllTodos] = useState(localTodos || [])

  const [allProjects, setAllProjects] = useState([]);



  function Project(title, color, tasks) {
    this.title = title;
    this.color = color;
    this.tasks = [...tasks]
  }

  const readBooks = new Project("Read Books", "red", ["Why Beliefs Matter", "Grokking Algorithms"]);
  const algo = new Project("Improve DSA", "yellow", ['Finish 5 Medium Leetcodes', 'Finish Colt Course'] )

  console.log(readBooks)

  // HORRENDOUS TEMP CODE, remove after project functionality.

  useEffect(() => {
    setAllProjects((prevProjects) => {
      let isDup = false;

      prevProjects.forEach((e) => {
        if(e.title === "Read Book" || e.title === "Improve DSA") {
          isDup = true;
        }
      })
      if(!isDup) {
        return [...prevProjects, readBooks, algo]
      }
      else {
        return [prevProjects]
      }
    })


  },[])

  

  console.log(allProjects)

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

// useEffect(() => {

//   setAllTodos((prevTodos) => {

//     let isDup = false;

//     prevProjects.forEach((e) => {
//       if(e.title === "Read Book" || e.title === "Improve DSA") {
//         isDup = true;
//       }
//     })
//     if(!isDup) {
//       return [...prevProjects, readBooks, algo]
//     }

//       return[...prevTodos, addPomdoro]

//   })


//   localStorage.setItem('allTodos', JSON.stringify(allTodos))

// },[])

 

 console.log(allTodos)

 function linking() {
  console.log('link')
 }

  function handleNavClick () {
    console.log("In the APP")
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  }
  
  function handleNewClick() {
    setShowForm(!showForm)
  }

  function setRefresh() {
    return true
  }

    return (
      <>
      <Navbar handleNavClick={handleNavClick} handleNewClick={handleNewClick}  />
      <Sidebar showSidebar={showSidebar}/>
      <MainContent allProjects={allProjects} setAllTodos={setAllTodos} showForm={showForm} handleNewClick={handleNewClick} allTodos={allTodos} />
      </>
    )
}

export default App
