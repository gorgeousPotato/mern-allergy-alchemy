import { useState, useEffect } from "react";
import * as recipesAPI from "../../utilities/recipes-api"
import "./NewRecipeStep1.css"

export default function NewRecipeStep1({ setStep, user, setRecipe }) {
  const [categories, setCategories] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    prepTime: '',
    cookTime: '',
    difficulty: '',
    category: '',
    glutenFree: false,
    dairyFree: false,
    eggFree: false,
  })

  useEffect(function() {
    async function getCategories() {
      const categories = await recipesAPI.getCategories();
      setCategories(categories);
    }
    getCategories();
  }, []);

  const categoryOptions = categories.map((cat, idx) => <option value={cat._id}>{cat.title}</option>)

  function handleChange(evt) {
    setNewRecipe({...newRecipe, [evt.target.name]: evt.target.value})
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newRecipeData = {...newRecipe};
    newRecipeData.user = user;
    const recipe = await recipesAPI.addRecipe(newRecipeData);
    setRecipe(recipe);
    setStep('step2');
  }

  return (
    <div className="NewRecipeStep1">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="name" name="title" value={newRecipe.title} onChange={handleChange}></input>
        <label>Preparation time (min)</label>
        <input type="number" placeholder="preparation time" name="prepTime" default="1" value={newRecipe.prepTime} onChange={handleChange}></input>
        <label>Cooking Time (min)</label>
        <input type="number" placeholder="cooking time" name="cookTime" default="1" value={newRecipe.cookTime} onChange={handleChange}></input>
        <label>Difficulty</label>
        <select name="difficulty" value={newRecipe.difficulty} default="1" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Category</label>
        <select name="category" value={newRecipe.category} onChange={handleChange}>
          {categoryOptions}
        </select>
        <label>Gluten Free</label>
        <input type="checkbox" name="glutenFree" onChange={handleChange}/>
        <label>Dairy Free</label>
        <input type="checkbox" name="dairyFree" onChange={handleChange}/>
        <label>Egg Free</label>
        <input type="checkbox" name="eggFree" onChange={handleChange}/>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}