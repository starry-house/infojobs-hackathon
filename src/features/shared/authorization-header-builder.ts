import { Session } from 'next-auth'

export class AuthorizationHeaderBuilder {
  static build(session: Session) {
    const header = new Headers()
    header.set(
      'Authorization',
      `Basic ${session.credentials}, Bearer ${session.accessToken}`,
    )
    return header
  }
}
