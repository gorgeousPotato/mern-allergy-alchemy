import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api"
import "./RecipeDetailPage.css"


export default function RecipeDetailPage({user}) {
  const [rec, setRec] = useState({
    title: '',
    prepTime: '',
    cookTime: '',
    difficulty: '',
    user: '',
    img: '',
    category: '',
    reviews: [],
    ingredients: [],
    steps: [],
    glutenFree: false,
    dairyFree: false,
    eggFree: false,
  })

  const {id} = useParams();

  useEffect(function() {
    async function getRecipe(idx) {
      const recipe = await recipeAPI.getRecipe(idx);
      setRec(recipe);
    }
    getRecipe(id)
  }, []);

  const ingredientsList = rec.ingredients.map((ing, idx) => <li>{ing.name} - {ing.qty} {ing.measure}</li>)
  const stepsList = rec.steps.map((step, idx) => <li>{step.name}</li>)

  function handleEdit(id) {

  }
  return (
    <div className="RecipeDetailPage">
      <h1>{rec.title}</h1>
      {rec.user._id === user._id && <Link to={`/recipes/${rec._id}/edit`}>Edit</Link>}
      <div className="container">
        <div className="main card" style={{backgroundImage: `url(${rec.img})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
          <div>
            <h5>Prep time: {rec.prepTime} min</h5>
            <h5>Cook time: {rec.cookTime} min</h5>
          </div>
          <div className="free">
          {rec.glutenFree && <h3>gluten free</h3> }
          {rec.dairyFree && <h3>dairy free</h3> }
          {rec.eggFree && <h3>egg free</h3> }
        </div>
          <h5>Author: {rec.user.name}</h5>
        </div>
        <div className="nutrition card">
          <h3>Nutrition</h3>
          <Link to={`/recipes/${rec._id}/nutrition`}>details</Link>
        </div>
        
        <div className="ingredients card">
          <h3>Ingredients:</h3>
          <ul>
            {ingredientsList}
          </ul>
        </div>
        <div className="method card">
          <h3>Method:</h3>
          <ul>
            {stepsList}
          </ul>
        </div>
      </div>
    </div>
  );
}