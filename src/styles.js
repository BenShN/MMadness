import styled from "styled-components";
import spark from "./ImageSrc/spark.png";
import light_bg from "./ImageSrc/light_bg.png";
import MorseCode from "./ImageSrc/MorseCode.png";

export const StyledMap = styled.div`
  border-style: content-box;
  display: flex;
  flex-wrap: wrap;
  width: 100vh;
  height: 100vh;
  aspect-ratio: 1/1;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://cdn.discordapp.com/attachments/1076560020449263622/1076709526176276552/map.jpg);
`;

export const StyledMapPiece = styled.div`
  box-sizing: border-box;
  border-style: solid;
  border-color: yellow;
  border-width: 1px;
  border: none;
  display: inline-block;
  width: 12.5%;
  aspect-ratio: 1/1;
  button {
    color: white;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    &:hover {
      background-color: lightblue;
    }
  }
`;

// export const StyledBlinkingText = styled.div.attrs(props=>({
//   blinkDuration: props.blink
// }))`
//   animation: blink 1s;
//   background-color: rgba(255, 0, 0, 0.5);
//   background-image: url(${spark});
//   height: 100px;
//   @keyframes blink {
//     0% {
//       opacity: 0;
//     }
//     10% {
//       opacity: 1;
//     }
//     90% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
// `;

export const StyledBlinking1s = styled.div`
  animation: blink 1s;
  background-image: url(${spark});
  width: 200px;
  height: 200px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  position: absolute;
  top: 14.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 2; */
  opacity: 0;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledBlinking3s = styled.div`
    animation: blink 3s;
  background-image: url(${spark});
  width: 200px;
  height: 200px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  position: absolute;
  top: 14.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 2; */
  opacity: 0;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledInstruction = styled.div`
  position: relative;
  background-image: url(${light_bg});
  height: 400px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 130%;
  button {
    background-color: lightyellow;
    border: none;
    border-radius: 25px;
    padding: 2%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  img {
    width: 50px;
  }
`;

export const StyledMorseCode = styled.div`
  background-image: url(${MorseCode});
  height: 310px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const StyledGameOver = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: rgba(139, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  color: rgb(255, 255, 255);
`;