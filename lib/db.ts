// import mongoose, { Mongoose } from 'mongoose';

// const MONGODB_URL = process.env.MONGODB_URL as string;

// interface MongooseConn {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// // Extend the global object to include our mongoose property
// declare global {
//   // eslint-disable-next-line no-var
//   var mongoose: MongooseConn | undefined;
// }

// const cached: MongooseConn = global.mongoose || {
//   conn: null,
//   promise: null
// };

// if (!global.mongoose) {
//   global.mongoose = cached;
// }

// export const connect = async (): Promise<Mongoose> => {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URL, {
//       dbName: 'connecting-clerk-to-mongodb',
//       bufferCommands: false,
//       connectTimeoutMS: 30000,
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// };

import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL!;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: any = (global as any).mongoose;

if(!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).mongoose =
  { conn: null, promise: null };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: 'connecting-clerk-to-mongodb',
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
