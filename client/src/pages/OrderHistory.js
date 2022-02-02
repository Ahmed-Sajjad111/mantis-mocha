import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, AccordionSummary, AccordionDetails, Accordion, Divider, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { totalPrices } from "../utils/helpers";

import { useQuery } from '@apollo/client';
import { GET_SHOPPER_INFO } from '../utils/queries';

function OrderHistory() {
    const { data } = useQuery(GET_SHOPPER_INFO);
    console.log(data)
    let shopper;

    if (data) {
        shopper = data.shopper;
    }

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Products</Link>

                {shopper ? (
                    <>
                        <Box sx={{ mt: 26, mb: 15, p: 2, bgcolor: "secondary.dark", borderRadius: "25px" }}>
                            <Typography align="center" variant="h2" component="div" sx={{ width: "80%", mx: "auto", mb: 2 }}>
                                Order History for {shopper.firstName} {shopper.lastName}
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            {shopper.orders.map((order) => (
                                <Accordion defaultExpanded>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1"
                                        sx={{
                                            bgcolor: "secondary.light",
                                            color: "success.primary"
                                        }}
                                    >
                                        <Typography>Order #{order._id}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            bgcolor: "secondary.main",
                                            color: "success.primary"
                                        }}
                                    >
                                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "left", width: "80%" }}>
                                            <Typography>Date: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "left",
                                                width: "80%",
                                                mb: 2,
                                            }}
                                        >
                                            <Typography>Total Price: {totalPrices(order.products)}</Typography>
                                        </Box>
                                        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                                            {order.products.map(({ _id, image, name, price, quantity }, index) => (
                                                <Grid item xs={4}>
                                                    <Grid item xs={12}>
                                                            Item:{" "}
                                                        <Link to={`/products/${_id}`}>
                                                            {name}
                                                        </Link>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        Price: {price}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        Quantity: {quantity}
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </>
                ) : null}
            </div>
        </>
    );
}

export default OrderHistory;
