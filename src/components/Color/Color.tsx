import { Flex, Heading } from "@chakra-ui/react";
import { BaseSyntheticEvent, useEffect, useState } from "react";

interface ColorProps {
  hex: string;
}

function Color({ hex }: ColorProps) {
  const [copyInfo, setCopyInfo] = useState(false);

  const copyToBuffer = (e: BaseSyntheticEvent) => {
    navigator.clipboard.writeText(e.target.innerText).catch((err) => {
      console.error("Error in copying text: ", err);
    });

    setCopyInfo(true);
  };

  useEffect(() => {
    let timeout: number;

    if (copyInfo) {
      timeout = setTimeout(() => setCopyInfo(false), 3000);
    }

    return () => clearTimeout(timeout);
  }, [copyInfo]);

  return (
    <Flex
      backgroundColor={`#${hex}`}
      w="14%"
      minW="100px"
      maxW="270px"
      h="150px"
      cursor="pointer"
      transition="all 0.5s ease"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      _hover={{ transform: "scale(1.1)" }}
      onClick={copyToBuffer}
    >
      <Heading as="h3" fontWeight="500" fontSize="20">
        #{hex}
      </Heading>
      <Heading
        as="h3"
        fontWeight="400"
        fontSize="20"
        visibility={copyInfo ? "visible" : "hidden"}
      >
        Color copied!
      </Heading>
    </Flex>
  );
}

export default Color;
