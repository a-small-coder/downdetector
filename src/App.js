import React from 'react';
import {
  Box,
  chakra,
  ChakraProvider,
  extendTheme,
  Flex,
  Image,
} from '@chakra-ui/react';
import Header from './components/Header';
import StyleColorMode from './components/colorMode';
import bgImage from './img/MainBackground.svg'


const theme = extendTheme({
  global: {
    // styles for the `body`
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Flex
      direction="column"
      align="center"
      m="0 auto"
      border='2px solid'
      bg='#2D3748'
      pos='relative'
    >
      <Image src={bgImage} />
    </Flex> */}

    <Box bg='#2D3748' py='16' px={{base: '5', md:'calc(100vw - 90%)'}} backgroundImage={bgImage}>

      <chakra.div
      h="calc(100vh - 128px)" 
      mx="auto" 
      bg='brand.200' 
      borderRadius='16'
      py={{base: '0', lg: '6'}}
      px='6'
      >
        <Flex direction='column'>
          <Header/>
        </Flex>
      </chakra.div>

    </Box>
      
    </ChakraProvider>
  );
}

export default App;
