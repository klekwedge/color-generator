import { Flex } from "@chakra-ui/react";
import Color from "../Color/Color";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Values from 'values.js';

function Palette() {
  const [list, setList] = useState(new Values('#ffffff').all(10));

  console.log(list[0]);

  return (
    <Flex wrap="wrap">
      {list.map((item, index) => (
        <Color key={uuidv4()} rgb={item.rgb}/>
      ))}
    </Flex>
  );
}

export default Palette;
