import { useState } from "react";
import NewRecipeStep1 from "../../components/NewRecipeStep1/NewRecipeStep1";
import NewRecipeStep2 from "../../components/NewRecipeStep2/NewRecipeStep2";

export default function NewRecipePage({user}) {
  const [step, setStep] = useState('step1');
  const [recipe, setRecipe] = useState(null);

  return (
    <div className="NewRecipePage">
      <h1>Adding a new recipe</h1>
      {step === 'step1' ? <NewRecipeStep1 setStep={setStep} user={user} setRecipe={setRecipe}/> : <NewRecipeStep2 recipe={recipe} setStep={setStep} user={user}/>}
    </div>
  );

}