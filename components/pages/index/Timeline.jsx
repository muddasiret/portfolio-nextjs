import { Heading, SlideFade, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
        id="timeline"
      >
        Work Experiences
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        May 2021 - Present
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.600" />
          Working as a Software Engineer at Bigbinary, Pune.
        </ListItem>
      </List>
      <Heading mt={10} mb={5} as="h2" size="md">
        Sep 2018 - Apr 2021
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.600" />
          Worked as Frontend Developer at Tridz Technologies, Bangalore.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.600" />
          6 Month internship at Tridz Technologies
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Timeline;
