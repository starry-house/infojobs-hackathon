import { ApplicationList } from '@/features/application'
import { applications } from '../mocks/applications.mock'
import { Container, Text, Flex, Stack } from '@chakra-ui/react'

const Applications = () => {
  return (
    <Flex as="main" alignItems="center">
      <Container maxW="container.xl" centerContent>
        <Stack spacing={2}>
          <Text
            fontSize="3xl"
            textAlign="center"
            fontWeight="light"
            color="gray.900"
            margin={10}
          >
            Applications
          </Text>
          <ApplicationList applicationList={applications} />
        </Stack>
      </Container>
    </Flex>
  )
}

export default Applications
