"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function RedirectForm() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Auto-submit the form once component mounts
    const form = document.getElementById("payhere_form") as HTMLFormElement;
    if (form) {
      form.submit();
    }
  }, []);

  // Get all parameters from URL
  const merchant_id = searchParams.get("merchant_id") || "";
  const return_url = searchParams.get("return_url") || "";
  const cancel_url = searchParams.get("cancel_url") || "";
  const notify_url = searchParams.get("notify_url") || "";
  const order_id = searchParams.get("order_id") || "";
  const items = searchParams.get("items") || "";
  const currency = searchParams.get("currency") || "";
  const amount = searchParams.get("amount") || "";
  const first_name = searchParams.get("first_name") || "";
  const last_name = searchParams.get("last_name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";
  const address = searchParams.get("address") || "";
  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "";
  const hash = searchParams.get("hash") || "";
  const custom_1 = searchParams.get("custom_1") || "";
  const custom_2 = searchParams.get("custom_2") || "";

  const payhereUrl = "https://www.payhere.lk/pay/checkout";

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>Redirecting to secure payment gateway...</p>
        <div className="spinner" style={{ 
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #3498db",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          animation: "spin 1s linear infinite",
          margin: "0 auto"
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
      <form id="payhere_form" action={payhereUrl} method="POST">
        <input type="hidden" name="merchant_id" value={merchant_id} />
        <input type="hidden" name="return_url" value={return_url} />
        <input type="hidden" name="cancel_url" value={cancel_url} />
        <input type="hidden" name="notify_url" value={notify_url} />
        <input type="hidden" name="order_id" value={order_id} />
        <input type="hidden" name="items" value={items} />
        <input type="hidden" name="currency" value={currency} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="first_name" value={first_name} />
        <input type="hidden" name="last_name" value={last_name} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="phone" value={phone} />
        <input type="hidden" name="address" value={address} />
        <input type="hidden" name="city" value={city} />
        <input type="hidden" name="country" value={country} />
        <input type="hidden" name="hash" value={hash} />
        {custom_1 && <input type="hidden" name="custom_1" value={custom_1} />}
        {custom_2 && <input type="hidden" name="custom_2" value={custom_2} />}
      </form>
    </div>
  );
}

export default function CheckoutRedirectPage() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <p>Loading...</p>
      </div>
    }>
      <RedirectForm />
    </Suspense>
  );
}
