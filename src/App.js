import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import  Storefront  from "./Components/StoreFront";
import Error from "./Components/Error";
import Layout from "./Components/Layout";
import ProductDetails from "./Components/ProductDetails";
const App =()=> {
  return (
    
    <>
      <Header/>
      <Categories/>
      <Footer/>
    </>
  )
  
}

export default App;