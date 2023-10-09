import { useState } from "react";
import "./AddIngredientForm.css";
import * as ingredientsAPI from "../../utilities/ingredients-api"


export default function AddIngredientForm({recipe}) {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    qty: '',
    measure: '',
  });

  const ingredientsList = ingredients.map((ing, idx) => <p>{ing.name} - {ing.qty} {ing.measure}</p>)

  function handleChange(evt) {
    setNewIngredient({...newIngredient, [evt.target.name]: evt.target.value});
  }

  async function handleAddIngredient(evt) {
    evt.preventDefault();
    const newIngredientData = {...newIngredient};
    newIngredientData.recipe = recipe;
    const newIndredients = await ingredientsAPI.addIngredient(recipe._id, newIngredientData);
    setIngredients(newIndredients);
  }

  return(
    <div className="AddIngredientForm">
      <h1>Ingredients</h1>
      {ingredients.length ? ingredientsList : "Add ingredients"}
      <form onSubmit={handleAddIngredient}> 
        <input type="text" name="name" autoComplete="off" value={newIngredient.name} placeholder="name" onChange={handleChange}></input>
        <input type="text" name="qty" value={newIngredient.qty} placeholder="quantity" onChange={handleChange}></input>
        <select name="measure" value={newIngredient.measure} onChange={handleChange} >
          <option value="tsp">teaspoon</option>
          <option value="tbsp">tablespoon</option>
          <option value="cup">cup</option>
          <option value="ml">mililitres</option>
          <option value="l">litres</option>
          <option value="g">grams</option>
          <option value="kg">kilograms</option>
        </select>
        <button type="submit">Add</button>
      </form>
      
    </div>
  );
}