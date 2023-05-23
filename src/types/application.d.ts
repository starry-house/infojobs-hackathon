import IJobOffer from './jobOffer'
import ITimeLineEvent from './timeLineEvent'

export type IApplication = {
  date: string
  code: string
  stepLabel: string
  cv: string
  hasCoverLetter: boolean
  rejected: boolean
  offerRemoved: boolean
  processClosed: boolean
  jobOffer: IJobOffer
  inProcessEvent: ITimeLineEvent
  cvReadEvent: ITimeLineEvent
  offerRemovedEvent?: ITimeLineEvent
  processClosedEvent?: ITimeLineEvent
  cvReceivedEvent: ITimeLineEvent
}

export type IApplicationExtended = IApplication & {
  steps: {
    current: boolean
    title: string
    subtitle: string
    description: string
  }[]
}
