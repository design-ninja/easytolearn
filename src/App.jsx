import React from "react";
import { Box, Container } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import './App.scss'

export function App() {
  return (
    <Box w="100vw" className="background">
      <Header />
      <Container maxW='1000px' centerContent>
        <Hero />
        <Projects />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;