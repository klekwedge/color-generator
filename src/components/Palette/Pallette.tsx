import { Flex } from "@chakra-ui/react";
import Color from "../Color/Color";
import { v4 as uuidv4 } from "uuid";

function Palette() {
  let template = Array(21).fill(null);

  return (
    <Flex maxW="500" wrap="wrap">
      {template.map((item) => (
        <Color key={uuidv4()} />
      ))}
    </Flex>
  );
}

export default Palette;
