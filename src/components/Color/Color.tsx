import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ColorProps {
  rgb: number[];
}

function Color({ rgb }: ColorProps) {
  const [color, setColor] = useState("");

  useEffect(() => {
    const r = rgb[0];
    const g = rgb[1];
    const b = rgb[2];
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    setColor(color);
  }, []);

  return (
    <Flex
      backgroundColor={color}
      w='14%'
      h="150px"
      cursor="pointer"
      transition="all 0.5s ease"
      justifyContent="center"
      alignItems="center"
      _hover={{ transform: "scale(1.1)" }}
    >
      {color}
    </Flex>
  );
}

export default Color;
