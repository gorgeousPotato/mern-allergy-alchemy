import { Link } from "react-router-dom";
import "./RecipeCard.css"

export default function RecipeCard({recipe}) {
  return (
    <Link to={`/recipes/${recipe._id}`}>
      <div className="RecipeCard">
        <h3>{recipe.title}</h3>
      </div>
    </Link>
  );
}