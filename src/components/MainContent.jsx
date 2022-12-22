import React from 'react';
import TodoForm from './TodoForm';
import DisplayAllTodos from './DisplayAllTodos';

const MainContent = (props) => {


    return (
        <main>
            <TodoForm showForm={props.showForm}/>
            <DisplayAllTodos allTodos={props.allTodos}/>
        </main>
    ) 
}


export default MainContent