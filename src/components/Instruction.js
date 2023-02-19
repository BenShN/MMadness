import { useState, useEffect } from "react";
import {StyledInstruction, StyledMorseCode, StyledBlinking1s, StyledBlinking3s} from '../styles';
import morse from "../data/morse";
import heart from "../ImageSrc/heart.png"

function Instruction({blink, setBlink, position, counter}) {
    // useEffect(()=>{
    //     if ()
    // }, [position])
    let alpha = ['A','B','C','D','E','F','G','H'];
    let morseStrY = morse[alpha[position[1]]];
    console.log("morseY",morseStrY);
    let morseStrX = morse[position[0]+1];
    console.log("morseX",morseStrX);

    // const letterA = ".-";
    // const letter4 = "....-";
    // const [morse, setMorse] = useState(array.split(""));

    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const letter = async (array) => {
        for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
        if (array[i] == "-") {
            setBlink(<StyledBlinking3s key={i} className={i}></StyledBlinking3s>);
            await delay(2100);
        } else if (array[i] == ".") {
            setBlink(<StyledBlinking1s key={i} className={i}></StyledBlinking1s>);
            await delay(1100);
        }
        }
    };

    const secondLetter = async () => {
        await letter(morseStrY);
        await delay(3000);
        letter(morseStrX);
    };

    return (
        <>
        <StyledInstruction>
            <button onClick={secondLetter} >Get Signal</button>
            {Array(counter).fill().map((value, index)=>(
                <img src={heart} alt="heart1" key={index} />
            ))}
        </StyledInstruction>
        <StyledMorseCode>
        </StyledMorseCode>
        </>
    )
}

export default Instruction;