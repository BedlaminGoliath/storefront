import React from "react";
import Products from "../Products";
import { filteredProducts } from "../../store/products";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2"

const Categories=()=> {
  const products = useSelector(filteredProducts);
  return(
    <Grid container spacing={2}>
          {products.map((category)=> (
    <Grid key={category.name}xs={4}>
          <Products product={category}/>
    </Grid>
      ))}
    </Grid>
  );
}


export default Categories;