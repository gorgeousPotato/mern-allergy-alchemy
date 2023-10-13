import {useState} from "react"
import * as itemsAPI from "../../utilities/items-api";
import "./IngredientsCard.css" 

export default function IngredientsCard({user, rec}) {

  const [checkedIngredients, setCheckedIngredients] = useState({});

  function handleChange(evt) {
    const { name, checked } = evt.target;
    setCheckedIngredients({...checkedIngredients, [name]: checked})
  }

  async function handleAdd() {
    const newItems = [];
    const newItemsArr = Object.keys(checkedIngredients).filter(item => checkedIngredients[item]);
    newItemsArr.map(i => newItems.push({item: i}));
    console.log(newItems);
    await itemsAPI.addItem(newItems);
    setCheckedIngredients({})
  }

  const ingredientsList = rec.ingredients.map((ing, idx) => (
    <div className="ingredient-container">
      <li>{ing.name} - {ing.qty} {ing.measure}</li>
      <input type="checkbox" name={ing.name} checked={checkedIngredients[ing.name] || false} onChange={handleChange}></input>
    </div>
    ))

  return(
    <div className="IngredientsCard">
      <div>
        <h3>Ingredients:</h3>
        <ul>
          {ingredientsList}
        </ul>
      </div>
      <button onClick={handleAdd} className="add-btn">Add to Shopping List</button>
    </div>
  );
}