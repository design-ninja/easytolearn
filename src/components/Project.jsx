import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Project() {
  return (
    <Card maxW="md">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="md"
        />
        <Stack mt="3" spacing="3">
          <Heading size="md">Project</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Link href='#' isExternal>
            View project <ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Project;
