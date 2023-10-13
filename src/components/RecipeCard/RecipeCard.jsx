import { Link } from "react-router-dom";
import "./RecipeCard.css"

export default function RecipeCard({recipe}) {
  return (
    <div className="RecipeCard">
      <Link to={`/recipes/${recipe._id}`}>
        <div className="recipe-card" style={{backgroundImage: `url(${recipe.img})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
          <div className="text-container">
            <h3>{recipe.title}</h3>
          </div>
        </div>
      </Link>

    </div>
  );
}