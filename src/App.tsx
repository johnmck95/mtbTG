// mtbTG - A React application that helps Mountain Bikers quickly setup their bikes.
// Copyright (C) 2022 John McKinnon

import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import {theme} from "./styling/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Box
      as="main" 
      w="100%" 
      mt="50px" 
      bg="brand.flatBlack" 
      color="brand.white"
      height="calc(100vh - 50px)"
      overflow="hidden"
      >
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/help" element={<Help/>} />
          </Routes>
      </Router>
    </Box>
  </ChakraProvider>
);
