import { Flex } from "@chakra-ui/react";
import Color from "../Color/Color";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Values from "values.js";
import Header from "../Header/Header";

function Palette() {
  const [list, setList] = useState(new Values("green").all(10));
  const [validInput, setValid] = useState(true);

  const genRanHex = () => {
    return (
      "#" +
      [...Array(6)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("")
    );
  };

  const changeListWithRandomValue = () => {
    const color = new Values(genRanHex()).all(10);
    setList(color);
    setValid(true);
  };

  const changeList = (newValue: string) => {
    try {
      const color = new Values(newValue).all(10);
      setList(color);
      setValid(true);
    } catch {
      setValid(false);
    }
  };

  return (
    <>
      <Header
        changeListWithRandomValue={changeListWithRandomValue}
        changeList={changeList}
        validInput={validInput}
      />
      <Flex wrap="wrap" justifyContent='center' alignItems='center'>
        {list.map((item) => (
          <Color key={uuidv4()} hex={item.hex} />
        ))}
      </Flex>
    </>
  );
}

export default Palette;
