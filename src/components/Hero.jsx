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
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Make money from <br />
        <Text as={"span"} color={"teal.400"}>
          your audience
        </Text>
      </Heading>
      <Text color={"gray.600"} fontSize='xl'>
        Monetize your content by charging your most loyal readers and reward
        them loyalty points. Give back to your loyal readers by granting them
        access to your pre-releases and sneak-peaks.
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
