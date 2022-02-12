import React from 'react';
import {
  Box,
  chakra,
  ChakraProvider,
  extendTheme,
  Flex,
} from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import bgImage from './assets/bg.svg'
import HeaderContainer from './components/Header';
import CompanyCardsSectionContainer from './components/CompanyCardsSection';
import CompanyPage from './components/CompanyPage';

const configurate = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
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
  fonts: {
    body: 'Roboto'
  }
}

const theme = extendTheme(configurate)

function App(props) {
  return (
<BrowserRouter>
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
          boxShadow='16px 16px 14px #44337A, 32px 32px 135px -1px rgba(85, 60, 154, 0.6);'
        >
          <Flex direction='column'>
            <HeaderContainer />
              <Routes>

              
                <Route path='/' element={<CompanyCardsSectionContainer/>}/>
                <Route path='/:company' element={<CompanyPage/>}/>
                </Routes>
          </Flex>
        </chakra.div>
      </Box>
    </ChakraProvider>
    </BrowserRouter>
    
  );
}

export default App
