import { useState } from "react";
import "./NewAllergyForm.css"

export default function NewAllergyForm({user, handleAdd}) {
  const [newAllergy, setNewAllergy] = useState({
    ingredient: '',
  });
  function handleChange(evt) {
    setNewAllergy({ ...newAllergy, [evt.target.name]: evt.target.value });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const newAllergyData = {...newAllergy};
    handleAdd(newAllergyData);
    setNewAllergy({ingredient: ''})
  }
  return (
    <div className="NewAllergyForm">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input name="ingredient" size="20" value={newAllergy.ingredient} onChange={handleChange} required></input>          
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}