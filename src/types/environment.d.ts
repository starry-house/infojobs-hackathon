export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string
      APPLICATION_URI: string
      OAUTH_CLIENT_ID: string
      OAUTH_CLIENT_SECRET: string
    }
  }
}
