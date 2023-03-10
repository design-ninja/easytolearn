import React from "react";
import { Box, Container } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Subscribe from "@/components/Subscribe";

import './App.scss'

export function App() {
  return (
    <Box>
      <Box w="100vw" className="background">
        <Header />
        <Container maxW='900px' centerContent>
          <Hero />
          <Projects />
          <Subscribe />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;