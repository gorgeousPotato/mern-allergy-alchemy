import {useState, useEffect} from "react"
import * as nutritionAPI from "../../utilities/nutrition-api"
import { useParams, Link } from "react-router-dom";


import "./NutritionDetailPage.css"

export default function NutritionDetailPage({user}) {
  const [nutrition, setNutrition] = useState('');

  const {id} = useParams();

  useEffect(function() {
    async function getNutrition(idx) {
      const nutr = await nutritionAPI.getRecipe(idx);
      setNutrition(nutr);
    }
    getNutrition(id)
  }, []);


  return (
    <div className="NutritionDetailPage">
      <h1>Nutrition</h1>
      {nutrition && (
        <ul>
        <p>Calories: {nutrition.calories}</p>
        <li>Fat: {nutrition.totalNutrients.FAT.quantity.toFixed(2)} g</li>
        <li>Fatty acids: {nutrition.totalNutrients.FASAT.quantity.toFixed(2)} g</li>
        <li>Trans fats: {nutrition.totalNutrients.FATRN.quantity.toFixed(2)} g</li>
        <li>Carbohydrate: {nutrition.totalNutrients.CHOCDF.quantity.toFixed(2)} g</li>
        <li>Fibers: {nutrition.totalNutrients.FIBTG.quantity.toFixed(2)} g</li>
        <li>Sugars: {nutrition.totalNutrients.SUGAR.quantity.toFixed(2)} g</li>
        <li>Protein: {nutrition.totalNutrients.PROCNT.quantity.toFixed(2)} g</li>
        <li>Cholesterol: {nutrition.totalNutrients.CHOLE.quantity.toFixed(2)} mg</li>
        <li>Sodium, Na: {nutrition.totalNutrients.NA.quantity.toFixed(2)} mg</li>
        <li>Calcium, Ca: {nutrition.totalNutrients.CA.quantity.toFixed(2)} mg</li>
        <li>Magnesium: {nutrition.totalNutrients.MG.quantity.toFixed(2)} mg</li>
        <li>Potassium, K: {nutrition.totalNutrients.K.quantity.toFixed(2)} mg</li>
        <li>Iron, Fe: {nutrition.totalNutrients.FE.quantity.toFixed(2)} mg</li>
        <li>Zinc, Zn: {nutrition.totalNutrients.ZN.quantity.toFixed(2)} mg</li>
        <li>Phosphorus, P: {nutrition.totalNutrients.P.quantity.toFixed(2)} mg</li>
        <li>Vitamin A: {nutrition.totalNutrients.VITA_RAE.quantity.toFixed(2)} mg</li>
        <li>Vitamin C: {nutrition.totalNutrients.VITC.quantity.toFixed(2)} mg</li>
        <li>Thiamin: {nutrition.totalNutrients.THIA.quantity.toFixed(2)} mg</li>
        <li>Riboflavin: {nutrition.totalNutrients.RIBF.quantity.toFixed(2)} mg</li>
        <li>Vitamin B-6: {nutrition.totalNutrients.VITB6A.quantity.toFixed(2)} mg</li>
        <li>Folate: {nutrition.totalNutrients.FOLDFE.quantity.toFixed(2)} mg</li>
        <li>Folic Acid: {nutrition.totalNutrients.FOLAC.quantity.toFixed(2)} mg</li>
        <li>Vitamin B-12: {nutrition.totalNutrients.VITB12.quantity.toFixed(2)} mg</li>
        <li>Vitamin D: {nutrition.totalNutrients.VITD.quantity.toFixed(2)} mg</li>
        <li>Vitamin E: {nutrition.totalNutrients.TOCPHA.quantity.toFixed(2)} mg</li>
        <li>Vitamin K: {nutrition.totalNutrients.VITK1.quantity.toFixed(2)} mg</li>
        <li>Total Daily:</li>
        <li>Fat: {nutrition.totalDaily.FAT.quantity.toFixed(2)} %</li>
        <li>Fatty acids: {nutrition.totalDaily.FASAT.quantity.toFixed(2)} %</li>
        <li>Carbohydrate: {nutrition.totalDaily.CHOCDF.quantity.toFixed(2)} %</li>
        <li>Fibers: {nutrition.totalDaily.FIBTG.quantity.toFixed(2)} %</li>
        <li>Protein: {nutrition.totalDaily.PROCNT.quantity.toFixed(2)} %</li>
        <li>Cholesterol: {nutrition.totalDaily.CHOLE.quantity.toFixed(2)} %</li>
        <li>Sodium, Na: {nutrition.totalDaily.NA.quantity.toFixed(2)} %</li>
        <li>Calcium, Ca: {nutrition.totalDaily.CA.quantity.toFixed(2)} %</li>
        <li>Magnesium: {nutrition.totalDaily.MG.quantity.toFixed(2)} %</li>
        <li>Potassium, K: {nutrition.totalDaily.K.quantity.toFixed(2)} %</li>
        <li>Iron, Fe: {nutrition.totalDaily.FE.quantity.toFixed(2)} %</li>
        <li>Zinc, Zn: {nutrition.totalDaily.ZN.quantity.toFixed(2)} %</li>
        <li>Phosphorus, P: {nutrition.totalDaily.P.quantity.toFixed(2)} %</li>
        <li>Vitamin A: {nutrition.totalDaily.VITA_RAE.quantity.toFixed(2)} %</li>
        <li>Vitamin C: {nutrition.totalDaily.VITC.quantity.toFixed(2)} %</li>
        <li>Thiamin: {nutrition.totalDaily.THIA.quantity.toFixed(2)} %</li>
        <li>Riboflavin: {nutrition.totalDaily.RIBF.quantity.toFixed(2)} %</li>
        <li>Vitamin B-6: {nutrition.totalDaily.VITB6A.quantity.toFixed(2)} %</li>
        <li>Vitamin B-12: {nutrition.totalDaily.VITB12.quantity.toFixed(2)} %</li>
        <li>Vitamin D: {nutrition.totalDaily.VITD.quantity.toFixed(2)} %</li>
        <li>Vitamin E: {nutrition.totalDaily.TOCPHA.quantity.toFixed(2)} %</li>
        <li>Vitamin K: {nutrition.totalDaily.VITK1.quantity.toFixed(2)}%</li>
      </ul>
      
      )}
        
    </div>
  );
}

