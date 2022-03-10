import { Box, Heading, SlideFade, Link, Image } from "@chakra-ui/react";

import Paragraph from "../../Paragraph";

const Profile = () => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          Hey , I’m Muddasir E{" "}
          <Image
            borderRadius="full"
            boxSize="150px"
            margin="20px 0"
            src="/meta-image.jpg"
            alt="Muddasir E"
          />
        </Heading>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          I'm a Frontend developer with experience in{" "}
          <Link
            color="purple.600"
            href="https://www.nodejs.org"
            isExternal
            fontWeight="500"
          >
            React JS,
          </Link>{" "}
          <Link
            color="purple.600"
            href="https://reactnative.dev"
            fontWeight="500"
            isExternal
          >
            React Native.
          </Link>{" "}
          I have moderate experience with
          <Link
            color="purple.600"
            href="https://www.nodejs.org"
            fontWeight="500"
            isExternal
          >
            {" "}
            NodeJS.
          </Link>
        </Paragraph>
        <br />
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Proficient in JS, Bootstrap, HTML and CSS. Passionate and keen in
          learning new things. Experience in working with git, SQL, deploying
          apps, dealing with clients& hosting meetings.
        </Paragraph>
      </Box>
    </SlideFade>
  );
};

export default Profile;
