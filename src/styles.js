import styled from "styled-components";

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