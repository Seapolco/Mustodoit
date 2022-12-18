import React, { useState } from 'react';

const Sidebar = (props) => {

  const className = props.showSidebar? "sidebar open" : "sidebar"

    return (

        <div className={className}>
        <section className="projectsContainer">
          <div className="projectsHeaderContainer">
            <header className="projectsHeader">Projects</header>
            <div className="projectButtonsContainer">
              <button className="addProjectButton"><span className="material-symbols-outlined addIcon">
                add
                </span></button>
              <button className="showHideProjects"><span className="material-symbols-outlined expandIcon">
                chevron_left
                </span></button>
            </div>
  
          </div>
          <div className="projectsListContainer">
            <ul className="projectsList">
            </ul>
          </div>
        </section>
      </div>
    )

}

export default Sidebar