import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADDORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { Box, Typography } from "@mui/material";

// this page will render after a user successfully pays with the stripe api, the page redirect to home after notifying user
function SuccessPage() {
  const [addOrder] = useMutation(ADDORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

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
