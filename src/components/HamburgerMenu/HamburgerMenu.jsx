import "./HamburgerMenu.css";
import {useState} from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function HamburgerMenu({handleLogout}) {
  const [isActive, setIsActive] = useState(false);
 
  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="HmburgerMenu">
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isActive && (
        <div className="burger-menu-links">
          <p onClick={handleClick}><Link to="/allergies">Set Allergy Profile</Link></p> 
          <p onClick={handleClick}><Link to="/categories">Browse Recipes</Link></p>
          <p onClick={handleClick}><Link to="/recipes">Personalised Recipes</Link></p>
          <p onClick={handleClick}><Link to="/recipes/new">Add a Recipe</Link></p>
          <p onClick={handleClick}><Link to="/items">Shopping List</Link></p>
          <p onClick={handleClick}><Link to="" onClick={ handleLogout }>Log Out</Link></p>
        </div>
      )}
    </div>
    
  );
}