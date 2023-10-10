import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as categoryAPI from "../../utilities/categories-api"
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./CategoriesDetailPage.css"

export default function CategoriesDetailPage() {
  const [recipes, setRecipes] = useState([])
  const {id} = useParams();

  useEffect(function() {
    async function getRecipes(idx) {
      const recipes = await categoryAPI.getRecipesByCat(idx);
      setRecipes(recipes);
    }
    getRecipes(id)
  }, []);

  const recipesCards = recipes.map((rec, idx) => <RecipeCard recipe={rec} key={idx} />)

  return (
    <div>
      <h1>Categories Detail Page</h1>
      {recipesCards}
    </div>
  );
}