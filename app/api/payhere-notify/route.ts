import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const merchant_id = formData.get('merchant_id');
    const order_id = formData.get('order_id');
    const payhere_amount = formData.get('payhere_amount');
    const payhere_currency = formData.get('payhere_currency');
    const status_code = formData.get('status_code');
    const md5sig = formData.get('md5sig');

    console.log('PayHere Notification received:', {
      merchant_id,
      order_id,
      payhere_amount,
      payhere_currency,
      status_code,
    });

    // Forward the notification to openmarketx.com
    const forwardUrl = 'https://openmarketx.com/checkout/notify';
    
    const forwardFormData = new URLSearchParams();
    forwardFormData.append('merchant_id', String(merchant_id || ''));
    forwardFormData.append('order_id', String(order_id || ''));
    forwardFormData.append('payhere_amount', String(payhere_amount || ''));
    forwardFormData.append('payhere_currency', String(payhere_currency || ''));
    forwardFormData.append('status_code', String(status_code || ''));
    forwardFormData.append('md5sig', String(md5sig || ''));
    
    // Include any additional fields from PayHere
    formData.forEach((value, key) => {
      if (!['merchant_id', 'order_id', 'payhere_amount', 'payhere_currency', 'status_code', 'md5sig'].includes(key)) {
        forwardFormData.append(key, String(value));
      }
    });

    console.log('Forwarding notification to:', forwardUrl);

    const forwardResponse = await fetch(forwardUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: forwardFormData.toString(),
    });

    const responseText = await forwardResponse.text();
    console.log('Forward response status:', forwardResponse.status);
    console.log('Forward response body:', responseText);

    if (!forwardResponse.ok) {
      console.error('Failed to forward notification to openmarketx.com');
    }

    // Always return 200 to PayHere to acknowledge receipt
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('Error processing notification:', error);
    // Still return 200 to prevent PayHere from retrying excessively
    return new NextResponse(null, { status: 200 });
  }
}
