import { useState, useEffect } from "react";
import "./AddStepForm.css";
import * as stepsAPI from "../../utilities/steps-api"


export default function AddStepForm({recipe, isEditing=false}) {
  const [steps, setSteps] = useState([]);
  const [newStep, setNewStep] = useState({
    name: '',
  });

  const stepsList = steps.map((step, idx) => (
  <div className="step-container">
    <p>{step.name}</p>
    <button onClick={()=> handleDelete(step._id)} className="delete-btn">x</button>
  </div>))

  function handleChange(evt) {
    setNewStep({...newStep, [evt.target.name]: evt.target.value});
  }

  async function handleAddStep(evt) {
    evt.preventDefault();
    const newStepData = {...newStep};
    newStepData.recipe = recipe;
    const newSteps = await stepsAPI.addStep(recipe._id, newStepData);
    setSteps(newSteps);
    setNewStep({
      name: '',
    });
  }

  async function handleDelete(id) {
    const newSteps = await stepsAPI.deleteStep(recipe._id, id);
    setSteps(newSteps);
  }

  
  return(
    <div className="AddStepForm">
      <h1>Steps</h1>
      {steps.length ? stepsList : <h3>Add steps</h3>}
      <form onSubmit={handleAddStep}> 
        <input type="text" name="name" autoComplete="off" value={newStep.name} placeholder="step" onChange={handleChange}></input>
        <button type="submit" class="add-btn">Add</button>
      </form>
    </div>
  );
}