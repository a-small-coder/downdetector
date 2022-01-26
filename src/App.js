import React from 'react';
import {
  Box,
  chakra,
  ChakraProvider,
  extendTheme,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header';
import bgImage from './img/MainBackground.svg'
import { setIsAutorizedAC } from './redux/auth_reducer';
import { connect } from 'react-redux';
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
            <p>
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):

              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action)
              ayout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):

              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              ayout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):

              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              ayout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):

              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action):
              Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens (resize your browser to see it in action)::
            </p>
          </Flex>
        </chakra.div>
      </Box>
    </ChakraProvider>
  );
}

export default App
