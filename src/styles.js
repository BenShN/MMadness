import styled from "styled-components";
import spark from './imageSrc/spark.png'

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


export const StyledBlinkingText = styled.div.attrs(props=>({
  blinkDuration: props.blink
}))`
  .blinking-text {
    animation: blink ${props => props.blinkDuration}s infinite;
    background-image: url(${spark});
  }

  @keyframes blink {
    5% {
      opacity: 0;
    }
  }
`;