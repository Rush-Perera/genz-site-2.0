import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Cancelled - GENZ Technologies",
  description: "Payment Cancelled",
};

const CheckoutCancelPage = () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
          Payment Cancelled
        </h2>
        <p className="text-lg text-body-color mb-8">
          Your payment was cancelled. No charges were made.
        </p>
        <div className="flex justify-center gap-4">
            <a
              href="/checkout"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Try Again
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 dark:bg-white dark:text-black"
            >
              Back to Home
            </a>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCancelPage;
