// 'use server';
// import User from '@/lib/modals/user.modal';
// import { connect } from "@/lib/db";

// export async function createUser(user: any) {
//   try {
//     await connect();
//     const newUser = new User(user);
//     return JSON.parse(JSON.stringify(newUser));
//   } catch (err) {
//     console.error(err);
//   }
// }

'use server';
import User from '@/lib/modals/user.modal';
import { connect } from "@/lib/db";

export interface UserData {
  clerkId: string;
  email: string;
  password: string;
  photo: string;
  username?: string;
  firstName?: string;
  lastName?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUser(user: any) {
  try {
    await connect();
    const newUser = new User(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.error(err);
  }
}
