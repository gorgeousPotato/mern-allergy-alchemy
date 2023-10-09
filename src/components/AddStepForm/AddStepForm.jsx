import { useState } from "react";
import "./AddStepForm.css";
import * as stepsAPI from "../../utilities/steps-api"


export default function AddStepForm({recipe}) {
  const [steps, setSteps] = useState([]);
  const [newStep, setNewStep] = useState({
    name: '',
  });

  const stepsList = steps.map((step, idx) => <p>{step.name}</p>)

  function handleChange(evt) {
    setNewStep({...newStep, [evt.target.name]: evt.target.value});
  }

  async function handleAddStep(evt) {
    evt.preventDefault();
    const newStepData = {...newSteps};
    newStepData.recipe = recipe;
    const newSteps = await stepsAPI.addStep(recipe._id, newStepData);
    setSteps(newSteps);
  }

  return(
    <div className="AddStepForm">
      <h1>Steps</h1>
      {steps.length ? stepsList : "Add steps"}
      <form onSubmit={handleAddStep}> 
        <input type="text" name="name" autoComplete="off" value={newStep.name} placeholder="step" onChange={handleChange}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}