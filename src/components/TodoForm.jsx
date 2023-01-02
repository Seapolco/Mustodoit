import React, { useEffect } from 'react';

const TodoForm = (props) => {

  

    const [formClass, setFormClass] = React.useState('todoForm');
    const [containerClass, setContainerClass] = React.useState('formContainer')

    useEffect(() => {
        props.showForm && setFormClass('todoForm show')
        props.showForm && setContainerClass("formContainer show")
    }, [props])

    const localTodos = JSON.parse(localStorage.getItem('allTodos'))


    function handleSubmit(e) {

        e.preventDefault();

        setFormClass('todoForm')
        setContainerClass('formContainer')

        localTodos.push({newTodo:'sdfsfsfsffdfs'})
        localStorage.setItem('allTodos', JSON.stringify(localTodos))
        console.log(localTodos)
    }
    return (
        <div className={containerClass}>
                <form className={formClass}>
                    <div className="titleDescriptionWrapper">
                        <div className="title">
                        <input id="titleInput" type="text" placeholder="Task" />
                        </div>
                        <div className="description">
                        <input
                            id="descriptionInput"
                            name="description"
                            placeholder="Description"
                        />
                        </div>
                </div>
                <div className="datePriorityWrapper">
                    <div className="date">
                    <input type="date" id="dateSelect" format="dd-MMM-yyyy"/>
                    </div>
                    <div className="prioritySelectWrapper">
                    <label htmlFor="prioritySelect"><span className="material-symbols-outlined">
                        flag
                        </span></label>
                    <select name="priority" id="prioritySelect">
                        <option className="low" value="Low">Low</option>
                        <option className="medium" value="Medium">Medium</option>
                        <option className="high" value="High">High</option>
                    </select>
                    </div>
                </div>
                <div className="projectsFormWrapper">
                    <label htmlFor="projectsFormSelect"><span className="material-symbols-outlined">
                        list_alt
                        </span></label>
                    <select name="projects" id="projectsFormSelect"></select>
                </div>
                <div className="todoFormButtonWrapper">
                    <div  className="cancelTodoWrapper"><button onClick = {handleSubmit} className="cancelTodoButton">Cancel</button></div>
                    <div      className="addTodoWrapper"><button onClick = {handleSubmit} className="addTodoButton">Add</button></div>
                </div>
                </form>
            </div>
    )
}

export default TodoForm