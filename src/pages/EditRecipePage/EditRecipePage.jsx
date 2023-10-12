import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api";
import AddStepForm from "../../components/AddStepForm/AddStepForm";
import AddIngredientForm from "../../components/AddIngredientForm/AddIngredientForm";
import "./EditRecipePage.css"

export default function NewRecipePage({user}) {
  const [recipe, setRecipe] = useState('');
  const { id } = useParams();

  useEffect(function() {
    async function getRecipe(idx) {
      const recipe = await await recipeAPI.getRecipe(id);
      setRecipe(recipe);
    }
    getRecipe(id)
  }, []);
  
  const isEditing = true;

  return(
    <div className="EditRecipePage">
      <div class="flex-col">
        <AddIngredientForm recipe={recipe} isEditing={isEditing}/>
        <AddStepForm recipe={recipe} isEditing={isEditing}/>
      </div>
      <Link to={`/recipes/${recipe._id}`}>
        <button class="save-btn">Save Recipe</button>
      </Link>
    </div>
  );

}