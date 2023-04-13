import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
import { Button }  from "@mui/material";
// import cartSlice from "../../store/cart";
import productSlice from "../../store/products";
import { Box } from "@mui/material"


const SimpleCart = ({ open, handleClose}) => {

    const dispatch = useDispatch();
    const cart = useSelector((state)=> { return state.cart});

    return(
        <div>
            <Modal
                open = { open }
                onClose = { handleClose }
            >
            <Box>
                {!cart.cartItems.length && (
                <Typography>No Items In Cart</Typography>
                )}

                {cart.cartItems.map((item)=> (
                <>
                    <Typography><p>{item.name}</p></Typography>
                    <Typography><p>${item.price}</p></Typography>
                    <Button 
                    onClick={()=> {
                        dispatch(productSlice.actions.increasedStock(item.name));
                    }}
                    >
                        Remove
                    </Button>
                    </>
                    ))}
            </Box>
            </Modal>
        </div>
        )
}

export default SimpleCart;