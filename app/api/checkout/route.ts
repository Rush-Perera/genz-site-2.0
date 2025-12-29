import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
      items 
    } = body;

    // 1. Validate input
    if (!amount || !currency || !email) {
       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Generate Order ID (In a real app, create a DB record here with status 'PENDING')
    const order_id = `Order_${Date.now()}`;

    // 3. Prepare PayHere params
    const merchantId = process.env.PAYHERE_MERCHANT_ID;
    const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;
    // Use NEXT_PUBLIC_BASE_URL if available, otherwise fallback to origin from request if possible, or localhost
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://genztechno.com'; 

    if (!merchantId || !merchantSecret) {
      return NextResponse.json({ error: 'Server misconfigured: Missing PayHere credentials' }, { status: 500 });
    }

    const formattedAmount = parseFloat(amount).toFixed(2);
    const hashedSecret = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
    const hashString = `${merchantId}${order_id}${formattedAmount}${currency}${hashedSecret}`;
    const hash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

    // 4. Return the data needed for the client to redirect
    const payhereParams = {
      merchant_id: merchantId,
      return_url: `${baseUrl}/checkout/success`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      notify_url: `${baseUrl}/api/payhere-notify`,
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

    // Determine PayHere URL (Sandbox or Production)
    const payhereUrl = process.env.NODE_ENV === 'production' 
        ? 'https://www.payhere.lk/pay/checkout' 
        : 'https://sandbox.payhere.lk/pay/checkout';

    return NextResponse.json({
      status: 'initiated',
      action_url: payhereUrl,
      params: payhereParams
    });

  } catch (error) {
    console.error('Checkout Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
