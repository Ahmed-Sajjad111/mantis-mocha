import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADDORDER, UPDATEQUANTITY } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { Box, Typography } from "@mui/material";

function SuccessPage() {
  const [addOrder] = useMutation(ADDORDER);
  const [updateQuantity] = useMutation(UPDATEQUANTITY)

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);
      const purchaseQuantity = cart.map((item) => item.purchaseQuantity)

      console.log(products)

      for(const product of cart){
        console.log(product._id, product.quantity, product.purchaseQuantity)
        const { data } = await updateQuantity({ 
          variables: 
          { 
            id: product._id,
            quantity:  product.quantity,
            removeQuantity: product.purchaseQuantity
          }})
          console.log(data)
      }

      if (products.length) {
        const { data } = await addOrder({ variables: { products, purchaseQuantity} });
        console.log(data)
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder()
  }, [addOrder, updateQuantity]);

  return (
    <Box
      sx={{
        mt: 50,
        mb: 15,
        bgcolor: "primary.main",
        borderRadius: 2,
        height: 100,
      }}
      className="container"
    >
      <Typography
        sx={{ fontSize: "2em", fontWeight: "bold", textAlign: "center" }}
      >
        Your purchase at Mocha Mantis has been completed!
      </Typography>
      <Typography sx={{ color: "white", textAlign: "center" }}>
        Thank you for your business.
      </Typography>
      <Box
        sx={{
          mt: 20,
          mb: 90,
          bgcolor: "primary.main",
          borderRadius: 2,
          width: 150,
        }}
      >
        <Typography
          sx={{
            mt: 50,
            fontSize: "0.9em",
            fontWeight: "light",
            textAlign: "center",
          }}
        >
          Redirecting to home page.
        </Typography>
      </Box>
    </Box>
  );
}

export default SuccessPage;
