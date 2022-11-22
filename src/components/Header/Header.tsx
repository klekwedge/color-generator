import { Box, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box textAlign="center">
      <Heading as="h1">Color Generator</Heading>
      <Heading as="h2" fontWeight="400" fontSize="25">
        Copy a color from the palette Generator
      </Heading>
    </Box>
  );
}

export default Header;
