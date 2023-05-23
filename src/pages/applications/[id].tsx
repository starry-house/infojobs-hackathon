import ApplicationStepper from '@/features/application/application-steper'
import { applicationExtended } from '@/mocks/applicationExtended.mock'
import { Container, Flex, Stack } from '@chakra-ui/react'

const Applications = () => {
  return (
    <Flex as="main" alignItems="center">
      <Container maxW="container.xl" centerContent>
        <Stack width={'100%'} flex={1} spacing={4}>
          <ApplicationStepper application={applicationExtended} />
        </Stack>
      </Container>
    </Flex>
  )
}

export default Applications
