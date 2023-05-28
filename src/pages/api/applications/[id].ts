import { NextApiRequest, NextApiResponse } from 'next'

import applications from '@/data/applications.json'
import { AuthorizationHeaderBuilder } from '@/features/shared'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { steps } from '@/mocks/steps.mock'

const requestApplicationById = async (id: unknown, session: Session) => {
  const headers = AuthorizationHeaderBuilder.build(session)
  const url = new URL(`/api/1/application/${id}`, process.env.API_URL)
  const response = await fetch(url, { headers })
  const data = await response.json()
  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query

    const session = await getServerSession(req, res, authOptions)

    if (!session) {
      return res.status(401).json({ error: { message: 'Unauthorized' } })
    }

    // Let's try to get the application from the API
    const data = await requestApplicationById(id, session)

    if (data?.code) {
      // If the application is found, we return it with random steps
      const randomStepNumber = Math.floor(Math.random() * steps.length)
      return res.status(200).json({ ...data, steps: steps[randomStepNumber] })
    }

    // If the application is not found, we try to get it from the local data
    const application =
      applications.find((application) => application.code === id) || null

    if (!application) {
      return res.status(404).json({ message: 'Application not found' })
    }

    res.status(200).json(application)
  } catch (error) {
    res.status(404).json({
      message: 'Application not found',
    })
  }
}
