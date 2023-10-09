import { useState, useEffect } from "react"
import AddStepForm from "../AddStepForm/AddStepForm";
import AddIngredientForm from "../AddIngredientForm/AddIngredientForm";
import * as recipesAPI from "../../utilities/recipes-api"

export default function newRecipeStep2({user, setStep, recipe}) {
  
  return(
    <div className="NewRecipeStep2">
      <h1>New recipe step2</h1>
      <div class="flex-2-col ">
        <AddIngredientForm recipe={recipe}/>
        <AddStepForm recipe={recipe}/>
      </div>
    </div>
  );
}