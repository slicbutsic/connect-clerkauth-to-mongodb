// import { clerkClient } from '@clerk/nextjs';
// import { WebhookEvent } from '@clerk/nextjs/server';
// import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
// import { Webhook } from 'svix';

// import { createUser } from '@/lib/actions/user.action'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request) {
  // Your webhook handling logic here
  return NextResponse.json({ message: 'Webhook received' });
}
