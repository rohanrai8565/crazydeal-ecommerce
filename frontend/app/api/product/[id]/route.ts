import { NextResponse } from 'next/server';

const map: Record<string, any> = {
  p1: { _id: 'p1', name: 'Sample Headphones', description: 'Wireless over-ear headphones with noise cancellation.', price: 99.99, images: ['https://via.placeholder.com/400x300?text=Headphones'] },
  p2: { _id: 'p2', name: 'Smart Watch', description: 'Fitness tracking and notifications on your wrist.', price: 149.0, images: ['https://via.placeholder.com/400x300?text=Watch'] },
  p3: { _id: 'p3', name: 'Gaming Mouse', description: 'Ergonomic design with RGB lighting.', price: 39.5, images: ['https://via.placeholder.com/400x300?text=Mouse'] }
};

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const item = map[params.id];
  if (!item) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}











