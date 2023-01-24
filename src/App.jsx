import React from "react";
import { Box, Container } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

// import './App.css'

export function App() {
  return (
    <Box bg="gray.100" w="100vw">
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