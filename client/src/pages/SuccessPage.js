import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADDORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function SuccessPage() {
  const [addOrder] = useMutation(ADDORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
        <h1>Your purchase has been completed.</h1>
        <h2>Thank you.</h2>
    </div>
  );
}

export default SuccessPage;
