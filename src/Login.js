import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import {db} from "./firebase";
import {auth} from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = (e) => {
    e.preventDefault();
    //some firebase login work here

    const register = (e) => {
        e.preventDefault();
        auth. 
        createUserWithEmailAndPassword(email , password) //sucessfully created email and password
        .then ((auth) => {
console.log (auth);
        })
        .catch(error => alert(error.message) )
        //some firebase register work here
     
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>By signing you agree to the terms.</p>

        <button onCLick={register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}
}
export default Login ;
