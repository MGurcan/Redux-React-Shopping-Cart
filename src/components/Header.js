import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const auth = useSelector(state => state.auth);

  return (
    <header>
      <nav className="header-nav">
        <div className="header-welcome">
        <h2>Welcome {auth.username}</h2>
        </div>
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logoutHandler} className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
