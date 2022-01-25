// theme.js
import bgImage from './img/MainBackground.svg'

import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  // styles: {
  //   global: {
  //     // styles for the `body`
  //     body: {
  //       backgroundColor: '#2D3748',
  //       bgImage: bgImage,
  //       bgAttachment: "fixed",
  //       bgSize: "cover",
  //       bgPosition: "center",
  //     }
  //   }
  // }
}

const theme = extendTheme({ config })

export default theme