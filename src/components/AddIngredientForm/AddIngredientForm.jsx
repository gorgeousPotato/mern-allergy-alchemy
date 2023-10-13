import { useState, useEffect } from "react";
import "./AddIngredientForm.css";
import * as ingredientsAPI from "../../utilities/ingredients-api"


export default function AddIngredientForm({recipe, isEditing=false}) {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    qty: '',
    measure: '',
  });


  const ingredientsList = ingredients.map((ing, idx) => (
    <div class="ingredient-container">
      <p>{ing.name} - {ing.qty} {ing.measure}</p>
      <button class="delete-btn" onClick={() => handleDelete(ing._id)}>x</button>
      </div>
      ))

  function handleChange(evt) {
    setNewIngredient({...newIngredient, [evt.target.name]: evt.target.value});
  }

  async function handleAddIngredient(evt) {
    evt.preventDefault();
    const newIngredientData = {...newIngredient};
    newIngredientData.recipe = recipe;
    const newIndredients = await ingredientsAPI.addIngredient(recipe._id, newIngredientData);
    setIngredients(newIndredients);
    setNewIngredient({
      name: '',
      qty: '',
      measure: '',
    })
  }

  async function handleDelete(id) {
    const newIngredients = await ingredientsAPI.deleteIngredient(recipe._id, id);
    setIngredients(newIngredients);
  }

  return(
    <div className="AddIngredientForm">
      <h1>Ingredients</h1>
      {ingredients.length ? ingredientsList : <p>Add ingredients</p>}
      <form onSubmit={handleAddIngredient}> 
        <input type="text" name="name" autoComplete="off" value={newIngredient.name} placeholder="name" onChange={handleChange}></input>
        <input type="text" name="qty" value={newIngredient.qty} placeholder="quantity" onChange={handleChange}></input>
        <select name="measure" value={newIngredient.measure} default="cup" onChange={handleChange} >
          <option value="tsp">teaspoon</option>
          <option value="tbsp">tablespoon</option>
          <option value="cup">cup</option>
          <option value="ml">mililitres</option>
          <option value="l">litres</option>
          <option value="g">grams</option>
          <option value="kg">kilograms</option>
        </select>
        <button type="submit" class="add-btn">Add</button>
      </form>
      
    </div>
  );
}