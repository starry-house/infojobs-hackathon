import { ApplicationList } from '@/features/application'
import { Container, Text, Flex, Stack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { IApplication } from '@/types/application'
import { applications } from '@/mocks/applications.mock'
import { useMemo } from 'react'

const Applications = () => {
  const { data, error } = useQuery<IApplication[]>({
    queryKey: ['todos'],
    initialData: [],
    queryFn: () =>
      fetch('/api/applications').then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        return response.json()
      }),
  })

  const applicationData = useMemo(
    () => (error || data.length == 0 ? applications : data),
    [error, data],
  )

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
          <ApplicationList applicationList={applicationData} />
        </Stack>
      </Container>
    </Flex>
  )
}

export default Applications
