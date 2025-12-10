"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Checkout = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Sri Lanka",
  });

  const [merchantId, setMerchantId] = useState("");
  
  // Payment details
  const amount = "100.00";
  const currency = "LKR";
  const items = "Site Payment";
  
  useEffect(() => {
    // In a real app, you might fetch this or have it in env vars exposed to client
    // For now we'll assume it's available or user needs to set it
    // We'll fetch it from an API or just use a placeholder if not set
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    const order_id = "Order_" + new Date().getTime();

    try {
      // 1. Get Hash from API
      const response = await fetch("/api/payhere-hash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id,
          amount,
          currency,
        }),
      });

      const data = await response.json();
      if (!data.hash) {
        alert("Failed to initialize payment. Please check configuration.");
        return;
      }

      // 2. Create a form dynamically and submit it
      const payhereForm = document.createElement("form");
      payhereForm.method = "POST";
      payhereForm.action = "https://sandbox.payhere.lk/pay/checkout"; // Use sandbox for testing

      const fields = {
        merchant_id: data.merchant_id, // Use merchant_id from API
        return_url: window.location.origin + "/checkout/success",
        cancel_url: window.location.origin + "/checkout/cancel",
        notify_url: window.location.origin + "/api/payhere-notify",
        order_id,
        items,
        currency,
        amount,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        hash: data.hash,
      };

      for (const key in fields) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = fields[key as keyof typeof fields];
        payhereForm.appendChild(input);
      }

      document.body.appendChild(payhereForm);
      payhereForm.submit();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred while processing payment.");
    }
  };

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection xl:p-15"
        >
          <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            Checkout
          </h2>

          <form onSubmit={handlePayment}>
            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <div className="w-full lg:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
              <div className="w-full lg:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
               <div className="w-full lg:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
               <div className="w-full lg:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-10">
               <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Order Summary
              </h3>
              <div className="flex justify-between border-b border-stroke pb-4 dark:border-strokedark">
                <span className="text-black dark:text-white">Item</span>
                <span className="text-black dark:text-white">{items}</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-lg font-bold text-black dark:text-white">Total</span>
                <span className="text-lg font-bold text-primary">{currency} {amount}</span>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Pay Now
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Checkout;
