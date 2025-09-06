import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    // Always succeed for demo to avoid login blockers
    return NextResponse.json({
      _id: 'u1',
      name: 'Demo User',
      email: email || 'demo@example.com',
      isAdmin: true,
      token: 'demo-token'
    });
  } catch (err) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }
}


