import styled from "styled-components";

export const StyledMap = styled.div`
border-style: content-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://cdn.discordapp.com/attachments/1076560020449263622/1076709526176276552/map.jpg);
`;

export const StyledMapPiece = styled.div`

  box-sizing: border-box;

  border-style: solid;
  border-color: yellow;
  border-width: 1px;
  display: inline-block;
  width: 12.5%;
  aspect-ratio: 1/1;
  button {
    color: yellow;
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