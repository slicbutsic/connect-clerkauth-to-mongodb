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

interface UserData {
  clerkId: string;
  email: string;
  password: string;
  photo: string;
  username?: string;
  firstName?: string;
  lastName?: string;
}

export async function createUser(user: UserData) {
  try {
    await connect();
    const newUser = new User(user);
    await newUser.save();
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
}
