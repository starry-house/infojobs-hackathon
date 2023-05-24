import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers'

export type InfoJobsProfile = {
  id: string
  email?: string | null
  emailHash?: string | null
  key?: string | null
  hasPhoto: boolean
  photo?: string | null
  name?: string | null
  surname1?: string | null
  surname2?: string | null
  fullName?: string | null
  city?: string | null
  province?: string | null
  publicProfileLink?: string | null
  status?: number | null
  validatedMail?: number | null
  accountCreation?: string | null
  lastCVUpdate?: string | null
  extendedBannerAttributes?: string | null
  subSegment?: string | null
  doesNotWantNotifications: boolean | null
  photoAccepted?: string | null
}

export const InfoJobs = (
  config: OAuthUserConfig<InfoJobsProfile>,
): OAuthConfig<InfoJobsProfile> => {
  const issuer = 'https://www.infojobs.net'
  return {
    id: 'infojobs',
    name: 'InfoJobs',
    type: 'oauth',
    checks: ['state'],
    authorization: {
      url: `${issuer}/api/oauth/user-authorize/index.xhtml`,
      params: { scope: 'CANDIDATE_PROFILE_WITH_EMAIL,CV,MY_APPLICATIONS' },
    },
    token: {
      url: `${issuer}/oauth/authorize`,
      request: async ({ provider, params: { code } }) => {
        const url = new URL(`${issuer}/oauth/authorize`)
        url.searchParams.set('grant_type', 'authorization_code')
        url.searchParams.set('client_id', provider.clientId as string)
        url.searchParams.set('client_secret', provider.clientSecret as string)
        url.searchParams.set('code', code as string)
        url.searchParams.set('redirect_uri', provider.callbackUrl)

        const response = await fetch(url, { method: 'POST' })

        const data = await response.json()

        return {
          tokens: {
            access_token: data.access_token,
            expires_at: data.expires_in,
            refresh_token: data.refresh_token,
          },
        }
      },
    },
    userinfo: {
      request: async ({
        provider: { clientId, clientSecret },
        tokens: { access_token },
      }) => {
        const credentials = btoa(`${clientId}:${clientSecret}`)
        const headers = new Headers({
          Authorization: `Basic ${credentials},Bearer ${access_token}`,
        })

        const response = await fetch(
          'https://api.infojobs.net/api/6/candidate',
          {
            headers,
          },
        )

        const data = await response.json()
        return data
      },
    },
    profile: async ({ id, email, photo: image, fullName: name }) => ({
      id,
      email,
      image,
      name,
    }),
    options: config,
  }
}
