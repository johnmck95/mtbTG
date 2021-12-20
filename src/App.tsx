import * as React from "react"
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Help from "./pages/Help"

const theme = extendTheme({
  colors: {
    brand: {
      lightGrey: "#AAAAAA",
      darkGrey: "#414A4C",
      blue: "#5B7BC0",
      white: "#FFFDFA",
      black: "black"
    }
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Box as="main" w="100%" pt="50px">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/help" element={<Help/>} />
          </Routes>
      </Router>
    </Box>
  </ChakraProvider>
)
