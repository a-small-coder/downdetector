import React, { useState } from 'react';
import {
  Box,
  chakra,
  ChakraProvider,
  extendTheme,
  Flex,
} from '@chakra-ui/react';
import bgImage from './assets/bg.svg'
import HeaderContainer from './components/Header';
import CompanyCard from './components/CompanyCard';

import sberLogo from './assets/noviy-logotip-sberbank.svg'

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
}

const theme = extendTheme(configurate)

function App(props) {

  const [isSubscribe, subscribeHandler] = useState(false)

  const cardsData = {
    company_name: 'Сбербанк России',
    company_logo: sberLogo,
    description: 'СберБанк — крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов',
    status: 'online',
    isSubscribe: isSubscribe
}

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
          boxShadow ='16px 16px 14px #44337A, 32px 32px 135px -1px rgba(85, 60, 154, 0.6);'
        >
          <Flex direction='column'>
            <HeaderContainer />

            <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt='80px' >
              <CompanyCard data={cardsData} changeSubscrStatus={subscribeHandler}/>
            </Flex>

          </Flex>
        </chakra.div>
      </Box>
    </ChakraProvider>
  );
}

export default App
