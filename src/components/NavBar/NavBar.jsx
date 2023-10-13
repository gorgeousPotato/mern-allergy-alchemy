import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut();
    setUser(null);
  }
  const hours = new Date().getHours();
  let welcomeMsg = 'Good Morning'
  if (hours >= 12 && hours < 17) welcomeMsg="Good afternoon";
  if (hours >= 17 && hours < 0) welcomeMsg="Good evening";
  if (hours >= 0 && hours < 5) welcomeMsg="Good night";
  
  return(
    <nav className="NavBar">
      <div className="navbar-container">
        <h1><Link to="/" class="logo">Allergy Alchemy.</Link></h1>
        <Link to="/allergies">Set Allergy Profile</Link>
        <Link to="/categories">Browse Recipes</Link>
        <Link to="/recipes">Personalised Recipes</Link>
        <Link to="/recipes/new">Add a Recipe</Link>
        <Link to="/items">Shopping List</Link>
        <Link to="" onClick={ handleLogout }>Log Out</Link>
      </div>
      <h3>{welcomeMsg}, {user.name}</h3>
    </nav>
  );
}