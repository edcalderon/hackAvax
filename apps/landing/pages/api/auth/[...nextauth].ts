import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import signIn  from '../signIn';
import { getCsrfToken } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { ethers } from 'ethers'
import type { SIWESession } from '@web3modal/core'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "main-login",
      name: 'Sign in with Email',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        /**
         * This function is used to define if the user is authenticated or not.
         * If authenticated, the function should return an object contains the user data.
         * If not, the function should return `null`.
         */
        if (credentials == null) return null;
        /**
         * credentials is defined in the config above.
         * We can expect it contains two properties: `email` and `password`
         */
        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });
          return { ...user, jwt };
        } catch (error) {
          // Sign In Fail
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: "second-login",
      name: 'Ethereum',
      credentials: {
        message: {
          label: 'Message',
          type: 'text',
          placeholder: '0x0'
        },
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0'
        }
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.message) {
            throw new Error('SiweMessage is undefined')
          }
          const siwe = new SiweMessage(credentials.message)
          const provider = new ethers.JsonRpcProvider(
            `https://rpc.walletconnect.com/v1?chainId=eip155:${siwe.chainId}&projectId=${projectId}`
          )
          const nonce = await getCsrfToken({ req: { headers: req.headers } })
          const result = await siwe.verify(
            {
              signature: credentials?.signature || '',
              nonce
            },
            { provider }
          )

          if (result.success) {
            return {
              id: `eip155:${siwe.chainId}:${siwe.address}`
            }
          }

          return null
        } catch (e) {
          return null
        }
      }
    })
  ],
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt'

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  callbacks: {
    session: async ({ session: Session, token, user }) => {
      Session.id = token.id;
      Session.jwt = token.jwt;
      return Promise.resolve(Session);
    },
    jwt: async ({ token, user: User }) => {
      const isSignIn = User ? true : false;
      if (isSignIn) {
        token.id = User.id;
        token.jwt = User.jwt;
      }
      return Promise.resolve(token);
    },
    redirect: async ({ url, baseUrl }) => {
      console.log(url)
      console.log(baseUrl)
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
});