import styled from "styled-components";
import spark from './ImageSrc/spark.png'
import light_bg from './ImageSrc/light_bg.png'
import MorseCode from './ImageSrc/MorseCode.png'

export const StyledMap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  height: 100%;
  /* background-image: ; */
`;

export const StyledMapPiece = styled.div`
  display: inline-block;
  width: 12.5%;
  aspect-ratio: 1/1;
  button {
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

  @keyframes blink {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledBlinking3s = styled(StyledBlinking1s)`
  animation: blink 2s;
`;

export const StyledInstruction = styled.div`
  background-image: url(${light_bg});
  height: 400px;
  width: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 130%;
`;

export const StyledMorseCode = styled.div`
  background-image: url(${MorseCode});
  height: 310px;
  width: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;