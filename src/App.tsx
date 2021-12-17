import * as React from "react"
import { ChakraProvider, theme} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Help from "./components/Help"
import "./app_style.css"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <body className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </body>
    </Router>
  </ChakraProvider>
)
