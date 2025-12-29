import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const order_id = searchParams.get('order_id');

  if (!order_id) {
    return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
  }

  // TODO: Query your database to get the real status of the order
  // const order = await db.orders.findUnique({ where: { id: order_id } });
  
  // For now, we return a mock status or you can implement a simple in-memory store for testing
  // if you are running locally and want to see state changes.
  
  return NextResponse.json({ 
    order_id, 
    status: 'PENDING', 
    message: 'This is a mock status endpoint. Please implement database lookup.' 
  });
}
