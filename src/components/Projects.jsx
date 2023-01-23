import React from "react";
import propTypes from "prop-types";
import { Stack } from "@chakra-ui/react";

function Projects(props) {
  const { children } = props;
  return (
    <Stack direction={['column', 'row']} spacing='24px'>
      {children}
    </Stack>
  );
}

Projects.propTypes = {
    children: propTypes.node,
};

Projects.defaultProps = {
    children: null,
};

export default Projects;
