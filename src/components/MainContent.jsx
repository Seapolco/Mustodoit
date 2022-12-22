import React from 'react';
import TodoForm from './TodoForm';

const MainContent = (props) => {


    return (
        <main>
            <TodoForm showForm={props.showForm}/>
            <h1>Main Content</h1>
            
        </main>
    )
}


export default MainContent