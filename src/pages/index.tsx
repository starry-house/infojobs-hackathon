import { ProfileCard } from '@/features/auth'
import { Container, Text, Flex, Stack, Button } from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home = () => {
  const { data: session } = useSession()

  return (
    <Flex as="main" alignItems="center" minHeight="100vh">
      <Container maxW="container.xl" centerContent>
        <Stack spacing={8}>
          <Stack spacing={2}>
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
          <Stack spacing={4}>
            {session?.user && <ProfileCard user={session.user} />}
            {session ? (
              <Button
                onClick={() => {
                  signOut()
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => {
                  signIn('infojobs', { callbackUrl: '/app/applications' })
                }}
              >
                Sign In
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
    </Flex>
  )
}

export default Home
