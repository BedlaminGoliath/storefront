import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import  Typography  from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import productSlice from "../../store/products";


const Products = ( product ) => {
  const dispatch = useDispatch();
    return(
      <>
      {product.inStock>0 && (
          <Card>
            <CardContent>
            <Typography variant="h5" component="div">{product.name}</Typography>
            <Typography variant="body2" color="blue"> Price:{product.price}</Typography>
            <Typography variant="body2" color="text.seconday"> Instock:{product.inStock}
            <Button
            onClick={()=> {dispatch(productSlice.actions.increasedStock(product.name))
            }}
            >
              Add Item to Cart
            </Button>
            </Typography>
          </CardContent>
          </Card>
      )}
      </>
    );
};

export default Products
