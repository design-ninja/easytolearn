import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box bg="white" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"center"}>
        <Heading fontSize="2xl" color="teal.400" cursor='pointer'>
          EasyToLearn
        </Heading>
      </Flex>
    </Box>
  );
}

export default Header;
