import React from "react";
import { Box, Typography, AccordionSummary, AccordionDetails, Accordion, Divider, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// function OrderHistory() {
//     return (
//         <Box sx={{ mt: 26, p: 2, bgcolor: "secondary.dark", borderRadius: "25px" }}>
//             <Typography align="center" variant="h2" component="div" sx={{ width: "80%", mx: "auto", mb: 2 }}>
//                 Order History
//             </Typography>
//             <Divider sx={{ mb: 2 }} />
//             <Accordion defaultExpanded>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1-content"
//                     id="panel1"
//                     sx={{
//                         bgcolor: "secondary.light",
//                         color: "success.primary"
//                     }}
//                 >
//                     <Typography>Order #123456</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails
//                     sx={{
//                         bgcolor: "secondary.main",
//                         color: "success.primary"
//                     }}
//                 >
//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "left", width: "80%" }}>
//                         <Typography>Date:</Typography>
//                         <Typography sx={{ ml: 1 }}>1/1/1911</Typography>
//                     </Box>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "left",
//                             width: "80%",
//                             mb: 2,
//                         }}
//                     >
//                         <Typography>Price: </Typography>
//                         <Typography sx={{ ml: 1 }}>$32.44</Typography>
//                     </Box>
//                     <Divider />
//                     <Box sx={{ display: "flex", flexDirection: "row", width: "80%" }}>
//                         <Typography align="center" component="div" sx={{ mx: "auto", mb: 2 }}>Items Ordered:</Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
//                         <Grid container alignItems="center" spacing={2}>
//                             <Grid item xs={4}>
//                                 Item Name:
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Item Price:
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Item Quantity:
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Mantis Coffee
//                             </Grid>
//                             <Grid item xs={4}>
//                                 $3.44
//                             </Grid>
//                             <Grid item xs={4}>
//                                 4
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Mantis Mug
//                             </Grid>
//                             <Grid item xs={4}>
//                                 $5.99
//                             </Grid>
//                             <Grid item xs={4}>
//                                 1
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Mantis Plushie
//                             </Grid>
//                             <Grid item xs={4}>
//                                 $10.22
//                             </Grid>
//                             <Grid item xs={4}>
//                                 1
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Mantis Doodad
//                             </Grid>
//                             <Grid item xs={4}>
//                                 $1.44
//                             </Grid>
//                             <Grid item xs={4}>
//                                 1
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Mantis Thingamajig
//                             </Grid>
//                             <Grid item xs={4}>
//                                 $6.44
//                             </Grid>
//                             <Grid item xs={4}>
//                                 4
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1-content"
//                     id="panel1"
//                     sx={{
//                         bgcolor: "secondary.light",
//                         color: "success.primary"
//                     }}
//                 >
//                     <Typography>Order #234567</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails
//                     sx={{
//                         bgcolor: "secondary.main",
//                         color: "success.primary"
//                     }}
//                 >
//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
//                         <Typography>Order Date:</Typography>
//                         <Typography sx={{ ml: 1 }}>1/2/1911</Typography>
//                     </Box>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: "row",
//                             justifyContent: "space-between",
//                             width: "80%",
//                             mb: 2,
//                         }}
//                     >
//                         <Typography>Price: </Typography>
//                         <Typography sx={{ ml: 1 }}>$2.44</Typography>
//                     </Box>
//                     <Divider />
//                     <Box sx={{ display: "flex", flexDirection: "row", width: "80%" }}>
//                         <Typography align="center" component="div" sx={{ mx: "auto", mb: 2 }}>Items Ordered:</Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
//                         <Grid container alignItems="center" spacing={2}>
//                             <Grid item xs={4}>
//                                 Item Name:
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Item Price:
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Item Quantity:
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Mantis Coffee
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </AccordionDetails>
//             </Accordion>
//         </Box>
//     );
// }

// export default OrderHistory;

/*

                                <ListItem primary="Mantis Coffee" secondary="4"></ListItem>
                                <ListItem primary="Mantis Mug" secondary="1"></ListItem>
                                <ListItem primary="Mantis Plushie" secondary="1"></ListItem>
                                <ListItem primary="Mantis Doodad" secondary="1"></ListItem>
                                <ListItem primary="Mantis Thingamajig" secondary="4"></ListItem>

      purchaseDate
      products{
        _id
        name
        description
        image
        price
        quantity
*/
