import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import "./AuthPage.css"


export default function AuthPage( { setUser }) {
  const [formChoice, setFormChoice] = useState('signup')
  function handleUiChoice() {
    if (formChoice === 'signup') setFormChoice('login');
    if (formChoice === 'login') setFormChoice('signup');
  }
  return (
    <main className="AuthPage">
      <div className="authPageContainer">
        <h1>Welcome to Allergy Alchemy</h1>
        {formChoice==='signup' ? <SignUpForm setUser={ setUser }/> : <LoginForm setUser={ setUser }/>}
        <div class="button-choice">
          <p>{formChoice === 'signup' ? 'Already have an account?' : "Don't have an account yet?"}</p>
          <button onClick={handleUiChoice}>{formChoice === 'signup' ? 'Login' : 'Sign Up'}</button>
        </div>
      </div>
      <div className="img-container">
        <div className="gradient-container"></div>
        <div></div>
      </div>
    </main>
  );
}