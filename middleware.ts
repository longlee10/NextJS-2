export { default } from "next-auth/middleware";

// for demo: no need to use this function since next auth has its own
// middleware function
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// specify protected paths:
export const config = {
  // *: 0 or more; +: 1 or more; ?: 0 or 1
  matcher: ["/users/:id*"],
};
