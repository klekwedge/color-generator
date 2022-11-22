import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface HeaderProps {
  changeList: () => void;
}

function Header({ changeList }: HeaderProps) {
  const [valid, setValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateInput = () => {
    if (inputRef.current) {
      setValid(/f/.test(inputRef.current.value));
    }
  };

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
          isInvalid={!valid}
          ref={inputRef}
        />
        <Button onClick={validateInput}>Generate</Button>
        <Button onClick={(changeList)}>Random</Button>
      </Flex>

      <Heading as="h2" fontWeight="400" fontSize="18" fontStyle="italic">
        {valid ? (
          "rgb, hex, color name, etc."
        ) : (
          <span style={{ color: "red" }}>Error input</span>
        )}
      </Heading>
    </Box>
  );
}

export default Header;
