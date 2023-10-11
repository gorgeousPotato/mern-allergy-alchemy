import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut();
    setUser(null);
  }
  return(
    <nav>
      <Link to="/allergies">Set Allergy Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/categories">Browse Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/recipes">Personalised Recipes</Link>
      &nbsp; | &nbsp;
      <Link to="/recipes/new">Add a Recipe</Link>
      <h3>Welcome, {user.name}</h3>
      <Link to="" onClick={ handleLogout }>Log Out</Link>
    </nav>
  );
}