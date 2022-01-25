import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import Header from './components/Header';
import StyleColorMode from './components/colorMode';


function App() {
  return (
    <ChakraProvider>
      <Header/>
    </ChakraProvider>
  );
}

export default App;
