import ToolCard from "../../ToolCard";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import { FaNodeJs, FaReact, FaJs, FaGitAlt, FaBug } from "react-icons/fa";

const tools = [
  {
    name: "React.JS",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "React Native",
    description: "A JavaScript library for building create truly native apps.",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev",
  },
  {
    name: "Next JS",
    description: "Production grade React applications that scale.",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev",
  },
  {
    name: "Cypress",
    description: "JavaScript End to End Testing Framework.",
    icon: <FaBug fontSize="20px" />,
    url: "https://www.cypress.io",
  },
  {
    name: "Node.JS",
    description: "Chrome's V8 JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "GIT & Github",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://medium.com/swlh/things-about-git-and-github-you-need-to-know-as-developer-907baa0bed79",
  },
  {
    name: "Javascript",
    description: "These days you can't build an amazing product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
];

const Stack = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
        id="technologies"
      >
        Primary Technologies
      </Heading>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool?.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Stack;
