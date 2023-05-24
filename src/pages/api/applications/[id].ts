import { NextApiRequest, NextApiResponse } from 'next'

import applications from '@/data/applications.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const onlyNumbers = /^\d+$/
    const { id } = req.query

    // test if is a valid number
    if (!onlyNumbers.test(id as string)) {
      throw new Error()
    }

    const application = applications[id as unknown as number] || null

    if (!application) {
      // we always return the first application if is a valid number but not found
      return res.status(200).json(applications[0])
    }

    res.status(200).json(application)
  } catch (error) {
    res.status(404).json({
      msg: 'Application not found',
    })
  }
}
