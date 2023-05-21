import { Card, CardBody } from '@chakra-ui/card'
import { Box, Heading, Stack, StackDivider, Text } from '@chakra-ui/layout'
import { Session } from 'next-auth'
import { FC } from 'react'

export type ProfileCardProps = {
  user: NonNullable<Session['user']>
}

export const ProfileCard: FC<ProfileCardProps> = ({ user }) => (
  <Card>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            User Email
          </Heading>
          <Text pt="2" fontSize="sm">
            {user.email}
          </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>
)
