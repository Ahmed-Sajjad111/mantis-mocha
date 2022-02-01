import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, AccordionSummary, AccordionDetails, Accordion, Divider, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useQuery } from '@apollo/client';
import { GET_SHOPPER_INFO } from '../utils/queries';

function OrderHistory() {
    const { data } = useQuery(GET_SHOPPER_INFO);
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
                                            <Typography>Total Price:</Typography>
                                        </Box>
                                        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                                            {order.products.map(({ _id, image, name, price, quantity }, index) => (
                                                <Grid
                                                    key={index}
                                                    item xs={4}>
                                                    <Grid item xs={6}>
                                                        Item: {name}
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Item Price: {price}
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        Item Quantity: {quantity}
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                        {/* {shopper.orders.map((order) => (
                            <div key={order._id} className="my-2">
                                <h3>
                                    {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                </h3>
                                <div className="flex-row">
                                    {order.products.map(({ _id, image, name, price }, index) => (
                                        <div key={index} className="card px-1 py-1">
                                            <Link to={`/products/${_id}`}>
                                                <img alt={name} src={`/images/${image}`} />
                                                <p>{name}</p>
                                            </Link>
                                            <div>
                                                <span>${price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))} */}
                    </>
                ) : null}
            </div>
        </>
    );
}

export default OrderHistory;
