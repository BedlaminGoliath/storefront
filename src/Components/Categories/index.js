import React from "react";
import Products from "../Products";
import { useSelector } from "react-redux";
import { filteredProducts } from "../../store/products";
import Grid from "@mui/material/Grid"

function Categories() {
  const products = useSelector(filteredProducts);
  return(
    <>
    <Grid container direction="row" justifycontent="space-around" alignItems="Center">

      {products.map((products)=> {
        <Grid xs={5}>
        <Products product={products}/>
      </Grid>
      })}
    </Grid>
      </>
  )

  
}

export default Categories;