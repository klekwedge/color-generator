import { Flex } from "@chakra-ui/react";
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
      gap="30px"
      p='0px 10px'
    >
      <Palette />
    </Flex>
  );
}

export default App;
