import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { order_id, amount, currency } = body;

    const merchantId = process.env.PAYHERE_MERCHANT_ID;
    const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;

    if (!merchantId || !merchantSecret) {
      return NextResponse.json({ error: 'Merchant ID or Secret not found' }, { status: 500 });
    }

    const formattedAmount = parseFloat(amount).toFixed(2);
    const hashedSecret = crypto.createHash('md5').update(merchantSecret).digest('hex').toUpperCase();
    const amountFormated = formattedAmount;
    
    const hashString = `${merchantId}${order_id}${amountFormated}${currency}${hashedSecret}`;
    const hash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

    return NextResponse.json({ hash, merchant_id: merchantId });
  } catch (error) {
    return NextResponse.json({ error: 'Error generating hash' }, { status: 500 });
  }
}
