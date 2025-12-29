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

    const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;

    if (!merchantSecret) {
        return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    // Verify the hash
    const hashedSecret = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
    const hashString = `${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${hashedSecret}`;
    const localMd5sig = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

    if (localMd5sig === md5sig && status_code === '2') {
        // Payment Success
        console.log(`Payment successful for order ${order_id}`);
        
        // TODO: Update your database here
        // Example: await db.orders.update({ where: { id: order_id }, data: { status: 'COMPLETED' } });

    } else if (status_code === '0') {
        // Payment Pending
        console.log(`Payment pending for order ${order_id}`);
    } else if (status_code === '-1') {
        // Payment Canceled
        console.log(`Payment canceled for order ${order_id}`);
    } else if (status_code === '-2') {
        // Payment Failed
        console.log(`Payment failed for order ${order_id}`);
    } else if (status_code === '-3') {
        // Chargedback
        console.log(`Payment chargedback for order ${order_id}`);
    } else {
        // Verification Failed
        console.log(`Payment verification failed for order ${order_id}`);
        return new NextResponse(null, { status: 400 });
    }

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('Error processing notification:', error);
    return new NextResponse(null, { status: 500 });
  }
}
