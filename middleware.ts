import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|.*\\.png$).*)",
      // Lewati request Server Action (signIn/signOut) agar tidak dicegat proxy
      missing: [{ type: "header", key: "next-action" }],
    },
  ],
};
