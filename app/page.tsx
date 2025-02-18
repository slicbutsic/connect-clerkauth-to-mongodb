// import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  // const user = await currentUser();

  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center text-center">
        <h1>Home Page</h1>
        {/* {user ? (
          <p>Welcome, {user.firstName}!</p>
        ) : (
          <p>Please sign in</p>
        )} */}
      </div>
    </div>
  );
}
