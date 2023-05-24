import ApplicationStepper from '@/features/application/application-steper'
import { getApplication } from '@/services/applications'
import { IApplicationExtended } from '@/types/application'
import { Center, Container, Flex, Spinner, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Applications = () => {
  const [loading, setLoading] = useState(true)
  const [application, setApplication] = useState<IApplicationExtended>()
  const { id } = useRouter().query

  const fetchApplication = async () => {
    const result = await getApplication(id as unknown as string)
    setApplication(result)
    setLoading(false)
  }

  useEffect(() => {
    if (!id) return

    fetchApplication()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (loading)
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    )

  return (
    <Flex as="main" alignItems="center">
      <Container maxW="container.xl" centerContent>
        <Stack width={'100%'} flex={1} spacing={4}>
          {!!application && <ApplicationStepper application={application} />}
        </Stack>
      </Container>
    </Flex>
  )
}

export default Applications
