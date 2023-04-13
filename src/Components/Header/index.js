import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { categories } from "../../store/categories/index";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/products";
import SimpleCart from "../SimpleCart";

const Header = () => {
  //useState for cart modal
  const [open, setOpen] = React.useState(false);
  const handleOpen =()=>setOpen(true);
  const handleClose=()=>setOpen(false);

  const dispatch = useDispatch();
  const items = useSelector((state)=>{
    return state.cart;
  });

  return(
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h1" gutterBottom>
            The Cache
          </Typography>

          <Box>
            {categories.map((category)=> (
              <Button
                   variant="h4"
                   key={category.displayName}
                   sx={{
                   color: "white",
                   fontWeight: 800,
                   display: "block",
                     my: 3,
                    }}
                    onClick={()=>{
                       dispatch(productSlice.actions.setActiveCategory(category.name));
                    }}>
              {category.displayName}
            </Button>
            ))}
          <Button key="cart" onClick={handleOpen}>Shopping Cart({items.numberOfItems}) </Button>
          </Box>

          <SimpleCart handleOpen={handleOpen} handleClose={handleClose} open={open}/>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;