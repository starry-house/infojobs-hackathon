import { IApplication } from '@/types/application'
import { SimpleGrid, VStack, useBreakpointValue } from '@chakra-ui/react'
import { FC } from 'react'
import { ApplicationCard } from './application-card'

export type ApplicationListProps = {
  applicationList: NonNullable<IApplication[]>
}

export const ApplicationList: FC<ApplicationListProps> = ({
  applicationList,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const handleOnClick = (index: number) => {
    console.log(index)
  }

  return (
    <VStack spacing={4} align="stretch">
      {isMobile ? (
        applicationList.map((application, index) => (
          <ApplicationCard
            key={index}
            application={application}
            onClick={() => handleOnClick(index)}
          />
        ))
      ) : (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {applicationList.map((application, index) => (
            <ApplicationCard
              key={index}
              application={application}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </SimpleGrid>
      )}
    </VStack>
  )
}
