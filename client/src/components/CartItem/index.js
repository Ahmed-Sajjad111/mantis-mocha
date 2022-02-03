import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    // removes cart item via id
    const removeFromCart = (item) => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id,
        });
        idbPromise("cart", "delete", { ...item });
    };

    // when users adds or decreases product quantity in cart, quantity number updates
    const onChange = (e) => {
        const value = e.target.value;
        // removes item from cart if quantity is 0
        if (value === "0") {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: item._id,
            });
            idbPromise("cart", "delete", { ...item });
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value),
            });
            idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
        }
    };

    return (
        <Box>
            <Grid container direction="row" spacing={0.5} sx={{ mb: 1 }}>
                <Grid item xs={6}>
                    <img
                        src={`/images/${item.image}`}
                        alt=""
                        style={{
                            height: 120,
                            width: 150,
                            maxHeight: { xs: 60, sm: 120 },
                            maxWidth: { xs: 75, sm: 150 },
                            mx: "auto",
                            mb: 2,
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column" spacing={0.5}>
                        <Box display="flex" flexDirection="column">
                            <Typography component="div" variant="subtitle1">{item.name}</Typography>
                            <Typography component="div" variant="subtitle2" sx={{ mt: -1, mb: 1 }}>${item.price}</Typography>
                            <TextField 
                                type="number" 
                                size="small" 
                                label="Quantity"
                                value={item.purchaseQuantity}
                                onChange={onChange}
                                placeholder="1"
                            />
                            <Button onClick={() => removeFromCart(item)}><DeleteForeverIcon/></Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CartItem;
