import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import  Typography  from '@mui/material/Typography';

const Products = ( product ) => {
    return(
        <Card>
        <CardContent>
          <Typography variant="h5" component="div">{product.name}</Typography>
          <Typography variant="body2" color="blue"> Price:{product.price}</Typography>
          <Typography variant="body2" color="text.seconday"> Instock:{product.inStock}</Typography>
        </CardContent>
      </Card>
    );
};

export default Products
