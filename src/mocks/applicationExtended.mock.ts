import { IApplicationExtended } from '@/types/application'

const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam consectetur numquam saepe voluptas quaerat, deleniti quidem aperiam ad quos sint nesciunt molestias nemo iusto necessitatibus, repellat aut dignissimos. Eum'

const applicationExtended = {
  hasCoverLetter: false,
  cv: 'Jose',
  stepLabel: '2/7',
  code: '25e51c3e-95b3-40be-8391-2df326c6fxxx',
  date: '2020-05-22T10:30:48.000+0000',
  rejected: false,
  offerRemoved: false,
  processClosed: false,
  jobOffer: {
    title: 'Ingeriero de Software con Ruso',
    company: 'Ingeniería Fernández',
    city: 'Terradillos De Esgueva',
    code: '793313858f4fcaac90e5ac9622cxxx',
    applications: 2,
    province: {
      id: 10,
      value: 'Burgos',
    },
  },
  steps: [
    {
      current: true,
      title: 'Prescreen with recluiter',
      subtitle: '10/02/23',
      description,
    },
    {
      current: false,
      title: 'Technical phone interview',
      subtitle: '20/02/23',
      description,
    },
    {
      current: false,
      title: 'On-Site Interview',
      subtitle: '25/02/23',
      description,
    },
  ],
} as IApplicationExtended

export { applicationExtended }
