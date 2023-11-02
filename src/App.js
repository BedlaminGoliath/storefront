import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";

const App =()=> {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Header/>
            <Categories/>
            <Footer/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
  
}

export default App;