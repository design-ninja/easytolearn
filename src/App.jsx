import React from "react";
import { Box, Container } from "@chakra-ui/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Project from "./components/Project";

// import './App.css'

export function App() {
  return (
    <Box bg="gray.100" w="100vw">
      {/* <Header /> */}
      <Container maxW='1000px' centerContent>
        <Hero />
        <Projects>
          <Project />
          <Project />
          <Project />
        </Projects>
      </Container>
    </Box>
  );
}

export default App;