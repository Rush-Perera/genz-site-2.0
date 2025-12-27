import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Success - GENZ Technologies",
  description: "Payment Successful",
};

const CheckoutSuccessPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const orderId = searchParams.order_id;

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
          Payment Successful!
        </h2>
        <p className="text-lg text-body-color mb-4">
          Thank you for your payment. Your transaction has been completed.
        </p>
        {orderId && (
          <p className="text-base text-body-color">
            Order ID: <span className="font-semibold text-black dark:text-white">{orderId}</span>
          </p>
        )}
        <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Back to Home
            </a>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
