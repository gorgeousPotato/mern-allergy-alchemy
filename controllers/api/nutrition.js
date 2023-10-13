const Recipe = require('../../models/recipe');
const fetch = require('node-fetch'); 

const edamamAppId = process.env.APP_ID;
const edamamAppKey = process.env.APP_KEY;
const edamamApiUrl = `https://api.edamam.com/api/nutrition-details?app_id=${edamamAppId}&app_key=${edamamAppKey}&beta=true&force=true`;

module.exports = {
  show,
}


async function show(req,res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
     const ingrArr =recipe.ingredients.map(ing => `${ing.qty} ${ing.measure} ${ing.name}`)
    const recipeData = {
      "title": recipe.title,
      "ingr": ingrArr,
    }
    const nutritionData = await fetchNutritionData(recipeData);
    res.json(nutritionData);
  } catch(error) {
    console.error('Error fetching nutrition data:', error);
  }
}

async function fetchNutritionData(recipeData) {
  try {
    const response = await fetch(edamamApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const nutritionData = await response.json();
    return nutritionData;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
}