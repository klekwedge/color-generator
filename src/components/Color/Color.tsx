import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Color() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    setColor(color);
  }, []);

  return (
    <Flex
      backgroundColor={color}
      w="70px"
      h="60px"
      justifyContent="center"
      alignItems="center"
    >
      {color}
    </Flex>
  );
}

export default Color;
