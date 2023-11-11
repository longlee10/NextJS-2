"use client"; // converting this component to js bundles -> make it client components. All dependent components will also be client -> no need to repeat.
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-secondary"
      onClick={() => console.log("Hello World")}
    >
      Click
    </button>
  );
};

export default AddToCart;
