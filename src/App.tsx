import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import Header from "./components/Header"
import "./app_style.css"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <body className="content">
      
    </body>
  </ChakraProvider>
)
