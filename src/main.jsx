import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#f7fafc',
    900: '#1a202c',
  },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
