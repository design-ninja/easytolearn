import React from "react";
import propTypes from "prop-types";

import {
  Heading,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
  Flex,
  Box,
} from "@chakra-ui/react";

function Project(props) {
  const { image, title, description, link } = props;
  return (
    <Flex
      maxW="sm"
      p="8"
      borderWidth="1px"
      rounded="md"
      bg="white"
      flexDirection='column'
    >
      <Image
        src={image}
        alt={title}
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        mb="4"
      />
      <Heading as="h2" size="md" mb="2">
        {title}
      </Heading>
      <Text mb="4" flex='1'>{description}</Text>
      <Box
        as="a"
        color="teal.400"
        href="#"
        fontWeight="bold"
      >
        View project
      </Box>
    </Flex>
  );
}

Project.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  link: propTypes.string,
};

Project.defaultProps = {
  image: null,
  title: null,
  description: null,
  link: null,
};

export default Project;
