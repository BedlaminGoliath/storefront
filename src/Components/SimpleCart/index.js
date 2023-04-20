import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
import { Button }  from "@mui/material";
import cartSlice from "../../store/cart";
import productSlice from "../../store/products";
import { Box } from "@mui/material"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  

const SimpleCart =
 (
    // { open, handleClose}
    props
    ) => {

    const dispatch = useDispatch();
    const cart = useSelector((state)=> { return state.cart});

    return(
        <div>
            <Modal
                open = { props.open }
                onClose = { props.handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box style={style}>
                {!cart.cartItems.length && (
                <Typography id="modal-modal-title" variant="h3">No Items In Cart</Typography>
                )}

                {cart.cartItems.map((item)=> (
                <>
                    <Typography variant="h3" component="h2"><p>{item.name}</p></Typography>
                    <Typography sc = {{ mt:2}}><p>${item.price}</p></Typography>
                    <Button 
                    onClick={()=> {
                        dispatch(productSlice.actions.increasedStock(item.name));
                        dispatch(cartSlice.actions.removeItem(item));
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