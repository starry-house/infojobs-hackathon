export type ITimeLineEvent = {
  date: Date
  description: string
  initializer: boolean
  finisher: boolean
  rejectedReasons: string[]
}
