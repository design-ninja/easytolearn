import React from "react";
import { Box, Container, Stack, Text, Link, HStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.50" color="gray.700">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={8}
        direction="column"
        spacing={4}
        justify="center"
        align={{ base: "center", md: "center" }}
      >
        <Text textAlign="center">
          This site and apps are developed by Maigic Web Solutions, a company
          which created
          {" "}
          <Link
            href="http://kanbanchi.com/"
            isExternal
            title="Kanbanchi"
            color="teal.400"
          >
            Kanbanchi
          </Link>
          {" "}
          and helped to launch
          {" "}
          <Link
            href="https://www.contentcal.com/"
            isExternal
            title="Contentcal"
            color="teal.400"
          >
            Contentcal
          </Link>
        </Text>
        <Box as={HStack} spacing={8}>
          <Link
            href="#"
            title="About the company"
            isExternal
            color="teal.400"
          >
            About the company
          </Link>
          {" "}
          <Link
            href="#"
            title="Our team"
            isExternal
            color="teal.400"
          >
            Our team
          </Link>
          {" "}
          <Link
            href="https://easytolearn.io/privacy_policy"
            title="Privacy policy"
            isExternal
            color="teal.400"
          >
            Privacy policy
          </Link>
          {" "}
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
