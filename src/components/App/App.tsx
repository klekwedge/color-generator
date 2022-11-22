import { Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Palette from "../Palette/Pallette";

function App() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap='50px'
    >
      <Header />
      <Palette />
    </Flex>
  );
}

export default App;
