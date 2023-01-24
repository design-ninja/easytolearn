import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

function Hero() {
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 8 }}
      py={{ base: 8, md: 16 }}
    >
      <Heading
        fontWeight={700}
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl" }}
        lineHeight={"120%"}
      >
        We are building a set of tools for foreign language teachers and learners
      </Heading>
      <Text color={"gray.600"} fontSize='xl'>
        We believe that teachers will not be replaced by AI, but 98.7% of their routine work will.
      </Text>
      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
        position={"relative"}
      >
        <Button colorScheme={"teal"} size={"lg"}>
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
}

export default Hero;
