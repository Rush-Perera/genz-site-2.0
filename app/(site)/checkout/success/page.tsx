import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Success - GENZ Technologies",
  description: "Payment Successful",
};

const CheckoutSuccessPage = () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
          Payment Successful!
        </h2>
        <p className="text-lg text-body-color">
          Thank you for your payment. Your transaction has been completed.
        </p>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
