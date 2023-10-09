import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { getUser } from "../../utilities/users-service"
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"
import AllergiesPage from '../AllergiesPage/AllergiesPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/allergies" element={<AllergiesPage user={user}/>}/>
          <Route path="/orders" element={<OrderHistoryPage />}/>
          <Route path="/*" element={<Navigate to="/orders" />} />
        </Routes>
      </>
          
          :
          <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}


