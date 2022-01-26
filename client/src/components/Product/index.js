import React from "react";
import { useDispatch, useSelector } from 'react-redux';

function Product() {

  const dispatch = useDispatch(); 
  const state = useSelector(state => state);

    return (
        <div className="">
        <h3> </h3>
        <img
          alt={}
          src={`/images/${image}`}
        />
        <p></p>
        <p></p>
        <button onClick={}>Buy</button>
    </div>
    )
}

export default Product