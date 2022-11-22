import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ColorProps {
  hex: string;
}

function Color({ hex }: ColorProps) {
  return (
    <Flex
      backgroundColor={`#${hex}`}
      w='14%'
      minW='100px'
      maxW='270px'
      h="150px"
      cursor="pointer"
      transition="all 0.5s ease"
      justifyContent="center"
      alignItems="center"
      _hover={{ transform: "scale(1.1)" }}
    >
      #{hex}
    </Flex>
  );
}

export default Color;
