import React from "react";
import { useSelector } from "react-redux";

// import { useParams } from "react-router-dom";
// import { productSelector } from "../../store/products";

const ProductDetails = () => {
  const product = useSelector((state) => {
    return state.selectedProduct;
  });

  return (
    <>
      <h2>{product.name}</h2>
    </>
  );
};

export default ProductDetails;