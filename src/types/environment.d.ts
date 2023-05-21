export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPLICATION_URI: string
      OAUTH_CLIENT_ID: string
      OAUTH_CLIENT_SECRET: string
    }
  }
}
