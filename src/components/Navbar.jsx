import React from 'react';
import seaCreature from '../assets/images/seaCreature.png';
import slothsshrug from '../assets/images/slothsshrug.png';

const Navbar = (props) => {

  // hamIcon.addEventListener('click', (e) => {
  //   // console.log(sidebar.style.visibility);
  //   if(sidebar.style.visibility === 'visible') {
      
  //     sidebar.setAttribute('class','sidebar');
  //     sidebar.style.visibility = 'hidden';
  //   } else {
  //     sidebar.setAttribute('class', 'sidebar open')
      
  //     sidebar.style.visibility = 'visible';
  //   }
  //   // console.log('ham!!!!!!!!!');
    
  // })

    return (

        <nav>
        <div className="navStart">
          <div onClick={props.handleClick} className="hamIconWrapper"><span className="material-symbols-outlined hamIcon">
            menu
            </span></div>
          <div className="homeIconWrapper"><span className="material-symbols-outlined homeIcon">
            home
            </span></div>
        </div>
        <div className="logoWrapper">
          <img className="logo" src={slothsshrug} alt="" />
        </div>
        <h1>MUSTODOIT</h1>
        <div className="navEnd">
          <div className="newTodoWrapper">
            <button className="newTodoButton">+</button>
          </div>
          
          <img className="userIcon" src={seaCreature} alt="" />
        </div>
        </nav>

    )

}

export default Navbar