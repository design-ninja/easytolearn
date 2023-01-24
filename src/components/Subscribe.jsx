import {
  Box,
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";

function Subscribe() {
  return (
    <Box py={16} w="100%">
      <Container bg="white" boxShadow={"xl"} rounded={"lg"} p={12}>
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
        >
          Subscribe to our newsletter
        </Heading>
        <Text textAlign={"center"} p={4} pb={8} color={"gray.600"}>
          Subscribe for occasional updates <br />
          (we will not use your e-mail for any other purpose)
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
        >
          <FormControl>
            <Input placeholder='Your email' size='lg' />
          </FormControl>
          <Button colorScheme="teal" size="lg">
            Subscribe
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Subscribe;
