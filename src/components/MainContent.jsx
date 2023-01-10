import React from 'react';
import TodoForm from './TodoForm';
import DisplayAllTodos from './DisplayAllTodos';

const MainContent = (props) => {


    return (
        <main>
            <TodoForm allProjects={props.allProjects} setAllTodos={props.setAllTodos} showForm={props.showForm} handleNewClick={props.handleNewClick} />
            <DisplayAllTodos setAllTodos={props.setAllTodos} allTodos={props.allTodos}/>
        </main>
    ) 
}


export default MainContent