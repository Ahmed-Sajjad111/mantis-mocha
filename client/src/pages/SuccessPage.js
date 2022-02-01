import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADDORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { Box, Typography } from "@mui/material";

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
      }, 30000000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Box
      sx={{
        mt: 20,
        mb: 15,
        bgcolor: "primary.main",
        te
      }}
      className="container"
    >
      <Typography sx={{}} >Your purchase at Mocha Mantis has been completed!</Typography>
      <Typography>Thank you for your business.</Typography>
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
    </Box>
  );
}

export default SuccessPage;
