import { Container, Text, Flex, Stack } from '@chakra-ui/react'

const Home = () => (
  <Flex as="main" alignItems="center" minHeight="100vh">
    <Container maxW="container.xl" centerContent>
      <Stack spacing="2">
        <Text
          fontSize="3xl"
          textAlign="center"
          fontWeight="light"
          color="gray.900"
        >
          InfoJobs
        </Text>
        <Text textAlign="center" color="gray.500">
          Made with &#x1F49B; and Javascript
        </Text>
      </Stack>
    </Container>
  </Flex>
)

export default Home
