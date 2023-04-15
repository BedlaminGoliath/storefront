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
import cache from "./shopping.png"

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
    <AppBar position="static" sx={{ backgroundColor: "#5F8FB3" }}>
      <Container>
        <Toolbar disableGutters>
          <img src={cache} alt="squirrel" style={{ width:"600px" ,marginRight: "30px"}}/>
          <Typography role="header" variant="h1" sx={{ mt: -1, mr: 2, display:{ xs: "none", md: "flex"}, fontFamily:'Roboto', fontWeight:700,color:"inherit" }}>
            The Cache
          </Typography>

          <Box sx={{ flexGrow:1 }}>
            {categories.map((category)=> (
              <Button
                   variant="h4"
                   key={category.displayName}
                   sx={{
                   color: "white",
                   fontWeight: 800,
                   display: "block",
                     my: 3,
                     ml: -1.5
                    }}
                    onClick={()=>{
                       dispatch(productSlice.actions.setActiveCategory(category.name));
                    }}>
             {category.displayName}
            </Button>
            ))}
          </Box>
          <Button key="cart" onClick={handleOpen}>Shopping Cart({items.it}) </Button>

          <SimpleCart handleOpen={handleOpen} handleClose={handleClose} open={open}/>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;