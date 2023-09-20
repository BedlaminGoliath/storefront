import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import  Typography  from '@mui/material/Typography';



const Products = ( {product} ) => {
    return(
      <Card>
        <CardContent>
          <Typography>
            {product.name}
          </Typography>
          <Typography>
            <p>Price: ${product.price}</p>
            <p>In Stock: {product.inStock}</p>
          </Typography>
        </CardContent>
      </Card>
    );
};

export default Products
