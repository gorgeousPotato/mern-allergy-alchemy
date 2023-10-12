import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import AddStepForm from "../AddStepForm/AddStepForm";
import AddIngredientForm from "../AddIngredientForm/AddIngredientForm";
import AddImgForm from "../AddImgForm/AddImgForm";
import "./NewRecipeStep2.css"

export default function newRecipeStep2({user, setStep, recipe}) {
  
  return(
    <div className="NewRecipeStep2">
      <div class="flex-col">
        <AddIngredientForm recipe={recipe}/>
        <AddStepForm recipe={recipe}/>
        <AddImgForm recipe={recipe} />
      </div>
      <Link to={`/recipes/${recipe._id}`}>
        <button class="save-btn">Save Recipe</button>
      </Link>
    </div>
  );
}