import Products from "../Products";
import React from "react";
import { displayProducts, filteredProducts } from "../../store/products";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";

const Categories=()=> {
  const products = useSelector(filteredProducts);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(displayProducts());
  },[]);

  return(
    <>
        <Grid  container spacing={2} sx={{ my:2 }}>
          {products.map((item)=> (
            <Grid key = {item} xs={4}>
              <Products product={item}/>
          </Grid>
      ))}
        </Grid>
      </>
  );  
};

export default Categories;