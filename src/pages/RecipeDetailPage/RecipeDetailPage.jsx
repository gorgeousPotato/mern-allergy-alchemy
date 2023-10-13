import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api"
import "./RecipeDetailPage.css"
import IngredientsCard from "../../components/IngredientsCard/IngredientsCard";


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

  // const ingredientsList = rec.ingredients.map((ing, idx) => <li>{ing.name} - {ing.qty} {ing.measure}</li>)
  const stepsList = rec.steps.map((step, idx) => <li>{step.name}</li>)
  let star = ''
  for (let i=1; i<= rec.difficulty; i++) {
    star+="⭐"
  }
  
  return (
    <div className="RecipeDetailPage">
      <div className="title-container">
        <h1>{rec.title}</h1>
        {/* {rec.user._id === user._id && <Link to={`/recipes/${rec._id}/edit`}><button className="edit-btn">Edit</button></Link>} */}
      </div>
      <div className="container">
        <div className="main card" style={{backgroundImage: `url(${rec.img})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
          <div className="time-container">
            <h5>Prep time: {rec.prepTime} min</h5>
            <h5>Cook time: {rec.cookTime} min</h5>
          </div>
          <div className="info-container">
            <h5>Difficulty: {star}</h5>
            <h5>Author: {rec.user.name}</h5>
          </div>
        </div>
        <div className="free card">
          {rec.glutenFree ? <h5>gluten free</h5> : <p>contains gluten</p>}
          {rec.dairyFree ? <h5>dairy free</h5> : <p>contains milk</p>}
          {rec.eggFree ? <h5>egg free</h5> : <p>contains egg</p>}
        </div>
        <div className="nutrition card">
          <div className="title-container">
            <h3>Nutrition</h3>
            <Link to={`/recipes/${rec._id}/nutrition`}><button className="edit-btn">Details</button></Link>
          </div>
        </div>
        <IngredientsCard rec={rec} user={user} />
        {/* <div className="ingredients card">
          <h3>Ingredients:</h3>
          <ul>
            {ingredientsList}
          </ul>
        </div> */}
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