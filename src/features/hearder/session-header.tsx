/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Avatar,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { useSession, signOut } from 'next-auth/react'

export const Header = () => {
  const { data: session } = useSession()

  return (
    <Flex
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between' }}
    >
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Hackaton Infojobs
      </Text>

      {session && (
        <HStack spacing={{ base: '0', md: '6' }}>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s">
                <HStack>
                  <Avatar size={'sm'} src={session.user.image!} />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text
                      fontSize="sm"
                      dangerouslySetInnerHTML={{ __html: session.user.name! }}
                    />
                  </VStack>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                  Cerrar sessión
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      )}
    </Flex>
  )
}
