import { NextApiHandler } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { AuthorizationHeaderBuilder } from '@/features/shared'
import { authOptions } from '../auth/[...nextauth]'

const requestApplications = async (session: Session) => {
  const headers = AuthorizationHeaderBuilder.build(session)
  const url = new URL('/api/5/application', process.env.API_URL)
  const response = await fetch(url, { headers })
  const data = await response.json()
  return data
}

const handler: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session)
    return res.status(401).json({ error: { message: 'Unauthorized' } })

  const data = await requestApplications(session)
  res.status(200).json(data.applications)
}

export default handler
