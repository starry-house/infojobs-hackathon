import { IApplication } from '@/types/application'
import { Box, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { ApplicationCard } from './application-card'

export type ApplicationListProps = {
  applicationList: NonNullable<IApplication[]>
}

export const ApplicationList: FC<ApplicationListProps> = ({
  applicationList,
}) => {
  const router = useRouter()
  const handleOnClick = (code: string) => {
    router.push(`/app/applications/${code}`)
  }

  return (
    <VStack spacing={4} align="stretch">
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={{ base: 'space-around', lg: 'space-evenly' }}
      >
        {applicationList.map((application, index) => (
          <ApplicationCard
            key={index}
            application={application}
            onClick={() => handleOnClick(application.code)}
          />
        ))}
      </Box>
    </VStack>
  )
}
