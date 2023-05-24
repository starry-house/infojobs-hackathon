import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Profile {
    id: string
  }

  interface Session {
    accessToken?: string
    user: { id?: string } & DefaultSession['user']
    credentials?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    id?: string
  }
}
