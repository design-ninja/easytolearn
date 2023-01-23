import React from 'react';
import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';


function Header() {
  return (
    <Box bg='white' px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize='xl'>EasyToLearn</Heading>
      </Flex>
    </Box>
  );
}

export default Header;