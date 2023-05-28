import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Text,
  Stack,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
} from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Home = () => {
  const { data: session } = useSession()

  const router = useRouter()

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      columnGap={{ base: 0, lg: 24 }}
      paddingX={{ base: 4, lg: 16 }}
      minHeight={{ lg: '100vh' }}
      overflowX="hidden"
    >
      <GridItem
        colSpan={{ base: 12, lg: 6 }}
        display="flex"
        alignItems="center"
      >
        <Stack spacing={6} align="start" paddingTop={52} paddingBottom={48}>
          <Stack spacing={2}>
            <Heading>
              El control total de tu proceso de postulación ahora en tus manos.
            </Heading>
            <Text fontSize="sm" textColor="gray.600" lineHeight="tall">
              Con JobProgress, dile adiós a la incertidumbre en la búsqueda de
              empleo. Recibe actualizaciones en tiempo real sobre el estatus de
              tus postulaciones. Además, obtén una idea clara de cuánto tiempo
              puede tomar cada etapa del proceso de entrevista. ¡Toma decisiones
              informadas y avanza con confianza hacia tu próximo rol con
              JobProgress!
            </Text>
          </Stack>
          <HStack>
            {session ? (
              <Button
                colorScheme="twitter"
                onClick={() => {
                  router.push('/app/applications')
                }}
              >
                Lanzar aplicación
              </Button>
            ) : (
              <Button
                colorScheme="twitter"
                onClick={() => {
                  signIn('infojobs', { callbackUrl: '/app/applications' })
                }}
              >
                Empezar
              </Button>
            )}
            <Button
              variant="ghost"
              rightIcon={<ArrowForwardIcon />}
              onClick={() => {
                router.push(
                  'https://github.com/starry-house/infojobs-hackathon',
                )
              }}
            >
              Leer más
            </Button>
          </HStack>
        </Stack>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, lg: 6 }}
        position="relative"
        minHeight={{ base: 320, lg: 'auto' }}
        marginRight={{ base: -4, lg: -20 }}
        marginLeft={{ base: -4, lg: 0 }}
      >
        <Image
          src="https://res.cloudinary.com/dmdfnfpma/image/upload/v1685292086/charlesdeluvio_e55zx5.jpg"
          alt="Persona sentada en una silla frente a un hombre"
          fill
          style={{ objectFit: 'cover' }}
        />
      </GridItem>
    </Grid>
  )
}

export default Home
