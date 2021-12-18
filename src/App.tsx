import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Help from "./pages/Help"
import "./app_style.css"

const theme = extendTheme({
  colors: {
    brand: {
      lightGrey: "#AAAAAA",
      darkGrey: "#414A4C",
      blue: "#5B7BC0",
      white: "#FFFDFA",
    }
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </main>
    </Router>
  </ChakraProvider>
)
