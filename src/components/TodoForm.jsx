import React from 'react';

const TodoForm = (props) => {

    let formClass = props.showForm ? "todoForm show" : "todoForm";
    let containerClass = props.showForm ? "formContainer show" : "formContainer";


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
                    <div className="cancelTodoWrapper"><button className="cancelTodoButton">Cancel</button></div>
                    <div className="addTodoWrapper"><button className="addTodoButton">Add</button></div>
                </div>
                </form>
            </div>
    )
}

export default TodoForm