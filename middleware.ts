// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: ["/", "forget-password", "api/webhooks/clerk"],
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };



// -----------


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) await auth.protect();
// });


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/forget-password", "/api/webhooks/clerk"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return;
  }
  await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
