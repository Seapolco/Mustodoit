import react from 'react';
import seaCreature from '../assets/images/seaCreature.png';
import slothsshrug from '../assets/images/slothsshrug.png';

const Navbar = () => {

    return (

        <nav>
        <div className="navStart">
          <div className="hamIconWrapper"><span className="material-symbols-outlined hamIcon">
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