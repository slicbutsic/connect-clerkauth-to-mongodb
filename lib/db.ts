// import mongoose, { Mongoose } from 'mongoose';
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
