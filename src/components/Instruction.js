import { useState, useEffect } from "react";
import {StyledInstruction, StyledMorseCode, StyledBlinking1s, StyledBlinking3s} from '../styles';

function Instruction() {

    // const letterA = ".-";
    // const letter4 = "....-";
    // // const [morse, setMorse] = useState(array.split(""));

    // const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    // const letter = async (array) => {
    //     for (let i = 0; i < array.length; i++) {
    //     if (array[i] == "-") {
    //         setBlink(<StyledBlinking3s key="3"></StyledBlinking3s>);
    //         await delay(2000);
    //     } else if (array[i] == ".") {
    //         setBlink(<StyledBlinking1s key="1"></StyledBlinking1s>);
    //         await delay(1000);
    //     }
    //     }
    // };

    // const secondLetter = async () => {
    //     letter(letterA);
    //     await delay(4000);
    //     letter(letter4);
    // };

    return (
        <>
        <StyledInstruction>
            <button >Get Signal</button>
        </StyledInstruction>
        <StyledMorseCode>
        </StyledMorseCode>
        </>
    )
}

export default Instruction;