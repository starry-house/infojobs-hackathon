import { InfoJobs } from '@/features/auth/oauth'
import NextAuth from 'next-auth'

export const authOptions = {
  providers: [
    InfoJobs({
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
  ],
}
export default NextAuth(authOptions)
