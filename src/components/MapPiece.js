import { StyledMapPiece } from "../styles";

const MapPiece = ({ index, h, w, btnPress }) => {
  // x: 0,
  // y: 0,
  // name: null
  /*
  return (
    <StyledMapPiece>
      <button>destination{index} {h}{w}</button>
    </StyledMapPiece>
  );
  */
    return (
        <StyledMapPiece>
            <button onClick={btnPress}>???</button>
        </StyledMapPiece>
    )
};

export default MapPiece;