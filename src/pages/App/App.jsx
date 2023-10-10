import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import AllergiesPage from '../AllergiesPage/AllergiesPage';
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage';
import NutritionDetailPage from '../NutritionDetailPage/NutritionDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/allergies" element={<AllergiesPage user={user}/>}/>
          <Route path="/categories" element={<CategoriesPage user={user}/>}/>
          <Route path="/recipes/new" element={<NewRecipePage user={user}/>}/>
          <Route path="/recipes/:id" element={<RecipeDetailPage user={user}/>}/>
          <Route path="/recipes/:id/nutrition" element={<NutritionDetailPage user={user}/>}/>

          <Route path="/*" element={<Navigate to="/orders" />} />
        </Routes>
      </>
          
          :
          <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}


