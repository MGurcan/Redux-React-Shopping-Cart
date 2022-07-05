import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {

  const dispatch = useDispatch();  

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
      setUserName(e.currentTarget.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
}
  const handleSubmit = (e) => {
  /*   e.preventDefault(); */
  console.log("user name buydu", userName)
    dispatch(authActions.login(userName, password));
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" value={userName} onChange={handleUsernameChange}/>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
