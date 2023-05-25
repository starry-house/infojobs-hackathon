import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from '@/features/shared/client'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <ChakraProvider>
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  </ChakraProvider>
)

export default App
