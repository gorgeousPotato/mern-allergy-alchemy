import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as recipesAPI from "../../utilities/recipes-api"
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./RecipesPage.css"

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  const {id} = useParams();

  useEffect(function() {
    async function getRecipes(idx) {
      const recipes = await recipesAPI.getRecipesAllergy(idx);
      setRecipes(recipes);
    }
    getRecipes(id)
  }, []);

  const recipesCards = recipes.map((rec, idx) => <RecipeCard recipe={rec} key={idx} />)

  return (
    <div className="RecipesPage">
      <h1>Recipes that don't contain your allergens</h1>
      {recipesCards}
    </div>
  );
}