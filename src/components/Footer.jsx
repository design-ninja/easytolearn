import React from "react";
import { Box, Container, Stack, Text, Link, HStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.50" color="gray.700" mt="16">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={8}
        direction="column"
        spacing={4}
        justify="center"
        align={{ base: "center", md: "center" }}
      >
        <Text textAlign='center'>
          This site and apps are developed by Maigic Web Solutions, a company
          which created{" "}
          <Link href="#" isExternal color="teal.400">
            Kanbanchi
          </Link>{" "}
          and helped to launch{" "}
          <Link href="#" isExternal color="teal.400">
            Contentcal
          </Link>
        </Text>
        <Box as={HStack} spacing={4}>
          <Link
            href="https://easytolearn.io/privacy_policy"
            title="Privacy policy"
            isExternal
            color="teal.400"
          >
            Privacy policy
          </Link>{" "}
          <Link
            href="https://easytolearn.io/#rec484876315"
            title="EasyToLearn Blog"
            isExternal
            color="teal.400"
          >
            Blog
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
