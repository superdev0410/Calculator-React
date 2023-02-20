import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const button_values = [
  [7, 8, 9, "+"],
  [6, 5, 4, "-"],
  [3, 2, 1, "*"],
  [0, "C", "=", "/"],
];

function App() {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          button_values.flat().map((btn, i) => {
            return (
              <Button
                classname="button"
                value="btn"
                onclick={() => {
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
