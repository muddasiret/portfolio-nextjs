import { Container, Divider } from "@chakra-ui/react";
import Stack from "components/pages/index/Stack";
import Timeline from "components/pages/index/Timeline";
import Profile from "components/pages/index/Profile";
import Seo from "components/Seo";
import Contact from "components/pages/index/Contact";

export default function Home() {
  return (
    <div>
      <Seo pageName={"Home"} />
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <Profile />
          <Divider my={10} />
          <Stack />
          <Divider my={10} />
          <Timeline />
          <Divider my={10} />
          <Contact />
        </Container>
      </main>
    </div>
  );
}
