import { useState, useEffect } from "react";
import * as allergiesAPI from "../../utilities/allergies-api"
import NewAllergyForm from "../../components/NewAllergyForm/NewAllergyForm";
import "./AllergiesPage.css"

export default function AllergiesPage({user}) {

  const [allergies, setAllergies] = useState([]);

  useEffect(function() {
    async function getAllergies() {
      const allergies = await allergiesAPI.getAll();
      setAllergies(allergies);
    }
    getAllergies();
  }, []);

  const allergiesList = allergies.map((allergy, idx) => (
    <div className="allergen">
      <h5>{allergy.ingredient}</h5>
      <button onClick={() => handleDelete(allergy._id)}>x</button>
    </div>
  ))

  async function handleAdd(newAllergyData) {
    const newAllergies = await allergiesAPI.create(newAllergyData);
    setAllergies(newAllergies);
  }

  async function handleDelete(allergyId) {
    await allergiesAPI.deleteAllergy(allergyId);
    setAllergies(allergies.filter(allergy => allergy._id !== allergyId))
  }

  return (
    <div className="AllergiesPage">
      <h1>Allergy Profile</h1>
      <h3>List the ingredients you are allergic to</h3>
      <NewAllergyForm user={user} handleAdd={handleAdd} />
      <div className="flex-column">
        {allergiesList}
      </div>
    </div>
    
  );
}