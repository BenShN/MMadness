import { useState, useEffect } from "react";
import { StyledBlinking1s, StyledBlinking3s } from "../styles.js";

const BlinkingText = () => {
  const letterA = ".-";
  const letter4 = "....-";
  // const [morse, setMorse] = useState(array.split(""));
  const [blink, setBlink] = useState(null);

  useEffect(()=>{
    secondLetter();
  }, [])

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const letter = async (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "-") {
        setBlink(<StyledBlinking3s key="3">some text</StyledBlinking3s>);
        await delay(2000);
      } else if (array[i] == ".") {
        setBlink(<StyledBlinking1s key="1">some text</StyledBlinking1s>);
        await delay(1000);
      }
    }
  };

  const secondLetter = async () => {
    letter(letterA);
    await delay(4000);
    letter(letter4);
  };

  return (
    <>
     {blink}
    </>
  );
};

export default BlinkingText;
