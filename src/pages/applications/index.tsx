import { ApplicationList } from '@/features/application'
import { Container, Text, Flex, Stack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { IApplication } from '@/types/application'

const Applications = () => {
  const { data } = useQuery<IApplication[]>({
    queryKey: ['todos'],
    initialData: [],
    queryFn: () =>
      fetch('/api/applications').then((response) => response.json()),
  })

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
          <ApplicationList applicationList={data} />
        </Stack>
      </Container>
    </Flex>
  )
}

export default Applications
