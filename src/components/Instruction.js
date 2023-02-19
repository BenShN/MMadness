import { useState, useEffect } from "react";
import {StyledInstruction, StyledMorseCode, StyledBlinking1s, StyledBlinking3s} from '../styles';
import morse from "../data/morse";

function Instruction({blink, setBlink, position}) {

    let alpha = ['A','B','C','D','E','F','G','H'];
    let morseStrY = morse[alpha[position[1]]];
    console.log(morseStrY);
    let morseStrX = alpha[position[0]]+1;
    console.log(morseStrX);


    // const letterA = ".-";
    // const letter4 = "....-";
    // const [morse, setMorse] = useState(array.split(""));

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const letter = async (array) => {
        for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
        if (array[i] == "-") {
            setBlink(<StyledBlinking3s key="3"></StyledBlinking3s>);
            await delay(2000);
        } else if (array[i] == ".") {
            setBlink(<StyledBlinking1s key="1"></StyledBlinking1s>);
            await delay(1000);
        }
        }
    };

    const secondLetter = async () => {
        letter(morseStrY);
        await delay(4000);
        letter(morseStrX);
    };

    return (
        <>
        <StyledInstruction>
            <button onClick={secondLetter} >Get Signal</button>
        </StyledInstruction>
        <StyledMorseCode>
        </StyledMorseCode>
        </>
    )
}

export default Instruction;