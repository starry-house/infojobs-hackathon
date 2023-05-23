import { IApplication } from '@/types/application'
import { Box, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ApplicationCard } from './application-card'

export type ApplicationListProps = {
  applicationList: NonNullable<IApplication[]>
}

export const ApplicationList: FC<ApplicationListProps> = ({
  applicationList,
}) => {
  const handleOnClick = (index: number) => {
    console.log(index)
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
            onClick={() => handleOnClick(index)}
          />
        ))}
      </Box>
    </VStack>
  )
}
