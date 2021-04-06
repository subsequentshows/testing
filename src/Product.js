import React from "react";

function Product(props) {
  return (
    <div>
      
      <h3>Product name: {props.name}</h3>
      <h3>Product price: {props.price}</h3>
      <h3>Product phone: {props.phone}</h3>
      <hr/>
    </div>
  );
}

export default Product;
