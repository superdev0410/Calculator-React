import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

import React, { useState } from "react";

const button_values = [
  [7, 8, 9, "+"],
  [6, 5, 4, "-"],
  [3, 2, 1, "*"],
  [0, "C", "=", "/"],
];

function App() {
  let [calc, setCalc] = useState({
    num: 0,
    res: 0
  })

  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          button_values.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className="button"
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
