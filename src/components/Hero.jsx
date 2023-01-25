import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";

function Hero() {
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      py={16}
      spacing="8"
    >
      <Heading
        fontWeight={700}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl" }}
        lineHeight={"120%"}
      >
        We are building a set of tools for foreign language teachers and learners
      </Heading>
      <Text fontSize='xl'>
        We believe that teachers will not be replaced by AI, <span className="marked">but 98.7% of their routine work will</span>
      </Text>
      <Text fontSize='xl'>
        We believe that students <span className="marked">can and should do a lot themselves to master a language,</span> and with help of technology they can.
      </Text>
      <Text fontSize='xl'>
        <span className="marked">Let teacher be a motivator, guide, inspiration, and a friend,</span> and computers can do all the dirty work.
      </Text>
    </Stack>
  );
}

export default Hero;
