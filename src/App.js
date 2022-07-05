import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  const cart = useSelector(state => state.cart)

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  /* const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems) */
  useEffect( () => {

    const sendRequest = async () => {
      const res = await  fetch('https://shopping-cart-app-e6d55-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      const data = await res.json();
    }
    sendRequest();
   
  }, [cart])


  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    
    
      
    </div>
  );
}

export default App;
