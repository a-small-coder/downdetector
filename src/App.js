import React from 'react';
import {
  Box,
  chakra,
  ChakraProvider,
  extendTheme,
  Flex,
} from '@chakra-ui/react';
import bgImage from './assets/bg.svg'
import HeaderContainer from './components/Header';


const theme = extendTheme({
  global: {
    body: {
      color: 'white',
    },
  },
  colors: {
    brand: {
      100: '#2D3748',
      200: '#6B46C1'
    },
  },
})

function App(props) {
  return (
    <ChakraProvider theme={theme}>
      <Box 
        bg='#2D3748' 
        py={{ base: '4', md: '8', lg: '12', xl: '16' }} 
        px={{ base: '5', md: 'calc(100vw - 90%)' }} 
        backgroundImage={bgImage}
      >
        <chakra.div
          minH={{ base: 'calc(100vh - 32px)', md: 'calc(100vh - 48px)', lg: 'calc(100vh - 96px)', xl: 'calc(100vh - 128px)' }}
          mx="auto"
          bg='brand.200'
          borderRadius='16'
          py={{ base: '0', lg: '6' }}
          px='6'
        >
          <Flex direction='column'>
            <HeaderContainer/>

          </Flex>
        </chakra.div>
      </Box>
    </ChakraProvider>
  );
}

export default App
