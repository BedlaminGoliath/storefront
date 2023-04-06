import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

 function App() {
  return (
    
      <div>
      <Header/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
  
}

export default App;