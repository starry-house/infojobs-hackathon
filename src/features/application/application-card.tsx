import { IApplication } from '@/types/application'
import { Card, CardBody } from '@chakra-ui/card'
import { Box, Heading, Stack, StackDivider, Text } from '@chakra-ui/layout'
import { FC } from 'react'

export type ApplicationCardProps = {
  application: NonNullable<IApplication>
  onClick?: () => void
}

export const ApplicationCard: FC<ApplicationCardProps> = ({
  application,
  onClick,
}) => {
  const jobOffer = application?.jobOffer

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      borderRadius="md"
      margin="1rem"
      width={300}
      _hover={{
        bg: 'gray.200',
        boxShadow: 'lg',
      }}
    >
      <Card height="100%">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Box>
              <Heading size="md" minH={12}>
                {jobOffer?.title}
              </Heading>
              <Text pt="1" fontSize="sm">
                {jobOffer?.company}
              </Text>
            </Box>
            <Box>
              <Text pt="1" fontSize="sm">
                {jobOffer?.city}
              </Text>
              <Heading size="xs" pt="3" textTransform="uppercase">
                {application?.stepLabel}
              </Heading>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}
