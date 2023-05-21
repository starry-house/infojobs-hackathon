import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <ChakraProvider>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </ChakraProvider>
)

export default App
