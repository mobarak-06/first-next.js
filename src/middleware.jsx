import { NextResponse } from "next/server";

export function middleware(request) {
  const currentCookie = request.cookies.get('next-token');
  console.log(currentCookie?.value);  // <-- safe access with optional chaining

  const dummyUserData = {
    role: "user",
    email: "test@admin.com",
  };



 
  return NextResponse.next();
}
