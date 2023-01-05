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

    /* APP code

      function Todo(title, description, priority, date, project) {
    this.title = title
    this.description = description
    this.priority = `Priority: ${priority}`
    this.date = date
    this.project = `Project: ${project}`
  }

  get todos from local storage

  const localTodos = JSON.parse(localStorage.getItem('allTodos'))

  then add created todo to this list

  then set local todos with new addition

  localStorage.setItem('allTodos', JSON.stringify(allTodos))



    */

  function storeInput(e) {
    let {name, value} = e.target

    console.log({name,value})
  }
    return (
        <div className={containerClass}>
                <form className={formClass}>
                    <div className="titleDescriptionWrapper">
                        <div className="title">
                        <input onChange= {storeInput} name='title' id="titleInput" type="text" placeholder="Task" />
                        </div>
                        <div className="description">
                        <input
                            onChange= {storeInput}
                            id="descriptionInput"
                            name="description"
                            placeholder="Description"
                        />
                        </div>
                </div>
                <div className="datePriorityWrapper">
                    <div className="date">
                    <input onChange= {storeInput} name='date' type="date" id="dateSelect" format="dd-MMM-yyyy"/>
                    </div>
                    <div className="prioritySelectWrapper">
                    <label htmlFor="prioritySelect"><span className="material-symbols-outlined">
                        flag
                        </span></label>
                    <select onChange= {storeInput} name="priority" id="prioritySelect">
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
                    <select onChange= {storeInput} name="projects" id="projectsFormSelect"></select>
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