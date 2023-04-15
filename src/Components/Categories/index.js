import React from "react";
import Products from "../Products";
import { useSelector } from "react-redux";
import {  filteredProducts } from "../../store/products";
import Grid from "@mui/material/Unstable_Grid2";

const Categories=()=> {
  const products = useSelector(filteredProducts);

  // const dispatch = useDispatch();

  // useEffect(()=> {
  //   dispatch(display());
  // },[]);

  return(
    <>
    <Grid container spacing={2} sx={{ my:2 }}>
      {products.map((item)=> (
        <Grid key={item} xs={4}>
          <Products product={item}/>
    </Grid>
      ))}
    </Grid>
      </>
  );  
};

export default Categories;