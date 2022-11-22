import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface HeaderProps {
  validInput: boolean;
  changeList: (number: string) => void;
  changeListWithRandomValue: () => void;
}

function Header({
  validInput,
  changeList,
  changeListWithRandomValue,
}: HeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box textAlign="center">
      <Heading as="h1">Color Generator</Heading>
      <Heading as="h2" fontWeight="400" fontSize="25" mb="5">
        Copy a color from the palette Generator
      </Heading>
      <Flex gap="5" mb="3">
        <Input
          placeholder="Type color"
          borderColor="black"
          _placeholder={{ color: "black" }}
          errorBorderColor="red.300"
          isInvalid={!validInput}
          ref={inputRef}
        />
        <Button
          onClick={() => {
            if (inputRef.current) {
              changeList(inputRef.current.value);
            }
          }}
        >
          Generate
        </Button>
        <Button onClick={changeListWithRandomValue}>Random</Button>
      </Flex>

      <Heading as="h2" fontWeight="400" fontSize="18" fontStyle="italic">
        {validInput ? (
          "rgb, hex, color name, etc."
        ) : (
          <span style={{ color: "red" }}>Error input</span>
        )}
      </Heading>
    </Box>
  );
}

export default Header;
