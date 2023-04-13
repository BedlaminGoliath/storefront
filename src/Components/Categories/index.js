import React from "react";
import Products from "../Products";
import { useSelector } from "react-redux";
import { filteredProducts } from "../../store/products";
import Grid from "@mui/material/Unstable_Grid2";

function Categories() {
  const products = useSelector(filteredProducts);
  return(
    <>
    <Grid container direction="row" justifycontent="space-around" alignItems="Center">
      {products.map((product)=> {
        <Grid container xs={{my : 2}}>
          <Products product={product}/>
        </Grid>
      })}
    </Grid>
      </>
  );  
}

export default Categories;