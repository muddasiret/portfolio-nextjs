import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  LightMode,
  SlideFade,
} from "@chakra-ui/react";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Box mt={10}>
        <Heading
          as="h1"
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          mb={3}
          id="contact"
          marginBottom={7}
        >
          Contact Me
        </Heading>
        <LightMode>
          <ButtonGroup>
            <Button
              colorScheme="green"
              bg="purple.600"
              href="mailto:muddasir009@email.com"
              borderRadius={5}
              p={3}
              as="a"
              leftIcon={<FaEnvelope />}
            >
              muddasir009@email.com
            </Button>
            <Button
              colorScheme="green"
              bg="purple.600"
              href="tel:+918714455705"
              borderRadius={5}
              p={3}
              as="a"
              leftIcon={<FaMobileAlt />}
            >
              +91 8714455705
            </Button>
          </ButtonGroup>
        </LightMode>
      </Box>
    </SlideFade>
  );
};

export default Contact;
