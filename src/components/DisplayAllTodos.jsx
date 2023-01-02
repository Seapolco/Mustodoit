import React from 'react';
import TodoListItem from './TodoListItem'

const AllTodos = (props) => {

    console.log(props.allTodos, 'inside ALLTODOS')

    const allTodoListItems = props.allTodos.map((todo,index) => {
        return <TodoListItem 
                key={crypto.randomUUID()}
                title={todo.title}
                description={todo.description}
                priority={todo.priority}
                date={todo.date}
                project={todo.project}
         />
    })


    return (
        <div className="displayTodos">
            <div className="todayDateContainer">
                <header className="today">Today</header>
                <header className="todaysDate">Today's Date</header>
            </div>
            <section className='todoListContainer'>
                <ul className="todoList">
                    {allTodoListItems}
                </ul>
            </section>
        </div>
    )
}

export default AllTodos