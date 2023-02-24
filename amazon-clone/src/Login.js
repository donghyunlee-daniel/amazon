import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const history = useHistory();

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error=> alert(error.message))
    }

    const signUp = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          if(auth){
            history.push("/")
          }
        }).catch(error=>alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className='login_container'>
        <h1>Login</h1>
        <form>
            <h5>Email</h5>
            <input value={email} onChange={e=>setEmail(e.target.value)} type='text'/>
            <h5>Paswword</h5>
            <input value={password} onChange={e=>setPassword(e.target.value)} type='password'/>

            <button className="login_signInButton" onClick={signIn}>Sign In</button>
        </form>

        <p>Terms of Use</p>
        <button className="login_registerButton" onClick={signUp}>SignUp</button>
      </div>
    </div>
  );
}

export default Login;
