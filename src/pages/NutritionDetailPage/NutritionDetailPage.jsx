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
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Total</td>
              <td>Per 100g</td>
              <td>Daily per 100g</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>{nutrition.calories}</td>
              <td>{(nutrition.calories * 100 / nutrition.totalWeight).toFixed(2)}</td>
              <td>{(nutrition.totalDaily.ENERC_KCAL.quantity * 100 / nutrition.totalWeight).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{nutrition.totalNutrients.FAT.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.FAT.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td>{(nutrition.totalDaily.FAT.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Fatty Acids</td>
              <td>{nutrition.totalNutrients.FASAT.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.FASAT.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td>{(nutrition.totalDaily.FASAT.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Trans Fats</td>
              <td>{nutrition.totalNutrients.FATRN.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.FATRN.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td></td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>{nutrition.totalNutrients.CHOCDF.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.CHOCDF.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td>{(nutrition.totalDaily.CHOCDF.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Fibers</td>
              <td>{nutrition.totalNutrients.FIBTG.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.FIBTG.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td>{(nutrition.totalDaily.FIBTG.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Sugars</td>
              <td>{nutrition.totalNutrients.SUGAR.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.SUGAR.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td></td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{nutrition.totalNutrients.PROCNT.quantity.toFixed(2)} g</td>
              <td>{(nutrition.totalNutrients.PROCNT.quantity * 100 / nutrition.totalWeight).toFixed(2)} g</td>
              <td>{(nutrition.totalDaily.PROCNT.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Cholesterol</td>
              <td>{nutrition.totalNutrients.CHOLE.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.CHOLE.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.CHOLE.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Sodium, Na</td>
              <td>{nutrition.totalNutrients.NA.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.NA.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.NA.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Calcium, Ca</td>
              <td>{nutrition.totalNutrients.CA.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.CA.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.CA.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Magnesium, Mg</td>
              <td>{nutrition.totalNutrients.MG.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.MG.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.MG.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Potassium, K</td>
              <td>{nutrition.totalNutrients.K.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.K.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.K.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Iron, Fe</td>
              <td>{nutrition.totalNutrients.FE.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.FE.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.FE.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Zinc, Zn</td>
              <td>{nutrition.totalNutrients.ZN.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.ZN.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.ZN.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Phosphorus, P</td>
              <td>{nutrition.totalNutrients.P.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.P.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.P.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Vitamin A</td>
              <td>{nutrition.totalNutrients.VITA_RAE.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.VITA_RAE.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.VITA_RAE.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Vitamin C</td>
              <td>{nutrition.totalNutrients.VITC.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.VITC.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.VITC.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Thiamin</td>
              <td>{nutrition.totalNutrients.THIA.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.THIA.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.THIA.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Riboflavin</td>
              <td>{nutrition.totalNutrients.RIBF.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.RIBF.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.RIBF.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Vitamin B-6</td>
              <td>{nutrition.totalNutrients.VITB6A.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.VITB6A.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.VITB6A.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Folate</td>
              <td>{nutrition.totalNutrients.FOLDFE.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.FOLDFE.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td></td>
            </tr>
            <tr>
              <td>Folic Acid</td>
              <td>{nutrition.totalNutrients.FOLAC.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.FOLAC.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td></td>
            </tr>
            <tr>
              <td>Vitamin B-12</td>
              <td>{nutrition.totalNutrients.VITB12.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.VITB12.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.VITB12.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Vitamin D</td>
              <td>{nutrition.totalNutrients.VITD.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.VITD.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.VITD.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Vitamin E</td>
              <td>{nutrition.totalNutrients.TOCPHA.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.TOCPHA.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.TOCPHA.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
            <tr>
              <td>Vitamin K</td>
              <td>{nutrition.totalNutrients.VITK1.quantity.toFixed(2)} mg</td>
              <td>{(nutrition.totalNutrients.VITK1.quantity * 100 / nutrition.totalWeight).toFixed(2)} mg</td>
              <td>{(nutrition.totalDaily.VITK1.quantity * 100 / nutrition.totalWeight).toFixed(2)} %</td>
            </tr>
          </tbody>
        </table>
      
        
    
      )}
        
    </div>
  );
}

