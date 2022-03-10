import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../Logo";

const SOCIALS = [
  {
    label: "Linkedin",
    icon: <FaLinkedin fontSize="20px" />,
    url: "https://www.linkedin.com/in/muddasir-e-bb93b21b6/",
  },
  {
    label: "Instagram",
    icon: <FaInstagram fontSize="20px" />,
    url: "https://www.instagram.com/mudu._/",
  },
];

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW="container.lg">
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        pb={5}
      >
        <Logo />
        <ButtonGroup variant="ghost">
          {SOCIALS.map((social) => (
            <IconButton
              as="a"
              href={social.url}
              aria-label={social.label}
              icon={social.icon}
            />
          ))}
        </ButtonGroup>
      </Stack>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">&copy; {new Date().getFullYear()} Muddasir E </Text>
        <IconButton
          as={Link}
          rounded="md"
          aria-label="Github Repo"
          rel="noopener"
          href="https://github.com/muddasiret"
          isExternal
          icon={<FaGithub fontSize="18px" />}
        />
      </Stack>
    </Container>
  </Box>
);

export default Footer;
