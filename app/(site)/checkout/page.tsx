import React from "react";
import Checkout from "@/components/Checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - GENZ Technologies",
  description: "Checkout page for GENZ Technologies",
};

const CheckoutPage = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
