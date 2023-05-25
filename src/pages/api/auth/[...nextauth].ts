import NextAuth, { AuthOptions } from 'next-auth'
import { InfoJobs } from '@/features/auth/oauth'

export const authOptions: AuthOptions = {
  providers: [
    InfoJobs({
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt: async ({ token, account, profile }) => {
      if (account) {
        token.accessToken = account.access_token
        token.id = profile?.id
      }
      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken
      session.user.id = token.id
      session.credentials = btoa(
        `${process.env.OAUTH_CLIENT_ID}:${process.env.OAUTH_CLIENT_SECRET}`,
      )
      return session
    },
  },
}
export default NextAuth(authOptions)
