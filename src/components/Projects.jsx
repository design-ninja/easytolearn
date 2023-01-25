import React from "react";
import { Stack, Heading, Box } from "@chakra-ui/react";

import Project from "./Project";

import langapp from "@/assets/projects/langapp.jpg";
import textmastery from "@/assets/projects/textmastery.jpg";

function Projects() {
  return (
    <Box spacing={4} pt={8}>
      <Heading as="h3" textAlign="center" mb={12}>Our projects</Heading>
      <Stack direction={["column", "row"]} spacing="24px">
        <Project
          title="Lang.app"
          description="Learn any language using any YouTube video! Access to subtitles in a foreign language, save and review new words and phrases, quick dictionary lookup."
          image={langapp}
          link="#"
        />
        <Project
          title="TextMastery Tutor"
          description="Empower your language teaching with TextMastery Tutor. Generate engaging reading materials and simplify texts for your students."
          image={textmastery}
          link="#"
        />
      </Stack>
    </Box>
  );
}

export default Projects;
