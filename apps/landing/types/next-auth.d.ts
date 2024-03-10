import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    id,
    jwt,
    user: User
  }
  interface User {
    id,
    username,
    email,
    jwt
  }
}