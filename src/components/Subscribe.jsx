import {
  Box,
  Stack,
  FormControl,
  Input,
  Button,
  Heading,
  Text,
  Container,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

function Subscribe() {
  return (
    <Container bg="grey.50" boxShadow={"md"} rounded={"lg"} p={16} m={16} textAlign="center">
      <Heading
        as={"h2"}
        fontSize={{ base: "xl", sm: "2xl" }}
      >
        Subscribe to our newsletter
      </Heading>
      <Text py={4} pb={8} color={"gray.600"}>
        Subscribe for occasional updates <br />
        (we will not use your e-mail for any other purpose)
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        as={"form"}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            height="100%"
            ml={1}
            children={
              <EmailIcon color="gray.300" boxSize={6} />
            }
          />
          <Input type="email" placeholder="Your email" size="lg" />
        </InputGroup>
        <Button colorScheme="purple" size="lg">
          Subscribe
        </Button>
      </Stack>
    </Container>
  );
}

export default Subscribe;
