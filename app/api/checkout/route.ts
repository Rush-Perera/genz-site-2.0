import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let body: any = {};

    if (contentType.includes('application/json')) {
      body = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      body = Object.fromEntries(formData);
    } else {
      return NextResponse.json({ error: 'Invalid Content-Type. Please use application/json or application/x-www-form-urlencoded' }, { status: 400 });
    }

    const { 
      first_name, 
      last_name, 
      email, 
      phone, 
      address, 
      city, 
      country,
      amount, 
      currency, 
      items,
      // Optional: caller can provide their own URLs for callbacks
      return_url: custom_return_url,
      cancel_url: custom_cancel_url,
      notify_url: custom_notify_url,
      order_id: custom_order_id,
      // Optional: custom fields for tracking (e.g., user_id, plan_slug)
      custom_1,
      custom_2,
      // Optional: response format - 'json' returns JSON data, default returns HTML
      response_format
    } = body;

    // 1. Validate input
    if (!amount || !currency || !email) {
       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Generate Order ID (In a real app, create a DB record here with status 'PENDING')
    const order_id = custom_order_id || `Order_${Date.now()}`;

    // 3. Prepare PayHere params
    const merchantId = process.env.PAYHERE_MERCHANT_ID;
    const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;
    
    // Use NEXT_PUBLIC_BASE_URL if available, otherwise fallback to localhost for development
    // IMPORTANT: When deploying, make sure NEXT_PUBLIC_BASE_URL is set to your production domain (e.g. https://genztechno.com)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://genztechno.com'; 

    if (!merchantId || !merchantSecret) {
      return NextResponse.json({ error: 'Server misconfigured: Missing PayHere credentials' }, { status: 500 });
    }

    const formattedAmount = parseFloat(amount).toFixed(2);
    const hashedSecret = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
    const hashString = `${merchantId}${order_id}${formattedAmount}${currency}${hashedSecret}`;
    const hash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

    // 4. Prepare PayHere data - use custom URLs if provided, otherwise use defaults
    const payhereParams: Record<string, string> = {
      merchant_id: merchantId,
      return_url: custom_return_url || `${baseUrl}/checkout/success`,
      cancel_url: custom_cancel_url || `${baseUrl}/checkout/cancel`,
      notify_url: custom_notify_url || `${baseUrl}/api/payhere-notify`,
      order_id,
      items: items || 'Order Payment',
      currency,
      amount: formattedAmount,
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      country,
      hash,
    };

    // Add custom fields if provided (for tracking user_id, plan_slug, etc.)
    if (custom_1) payhereParams.custom_1 = custom_1;
    if (custom_2) payhereParams.custom_2 = custom_2;

    console.log('PayHere Params:', payhereParams); // Debug log to check URLs

    const payhereUrl = 'https://www.payhere.lk/pay/checkout';

    // 5. Return JSON or HTML based on response_format
    if (response_format === 'json') {
      // Return JSON with action URL and params for proxy/API consumers
      return NextResponse.json({
        action_url: payhereUrl,
        params: payhereParams
      });
    }

    // Default: Return HTML that auto-submits to PayHere
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting to Payment Gateway...</title>
      </head>
      <body onload="document.forms['payhere_form'].submit()">
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif;">
          <p>Redirecting to secure payment gateway...</p>
        </div>
        <form name="payhere_form" action="${payhereUrl}" method="POST">
          ${Object.entries(payhereParams).map(([key, value]) => 
            `<input type="hidden" name="${key}" value="${value}" />`
          ).join('')}
        </form>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });

  } catch (error) {
    console.error('Checkout Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
