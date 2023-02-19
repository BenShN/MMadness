import { StyledMapPiece } from "../styles";

const MapPiece = ({ index, h, w }) => {
  // x: 0,
  // y: 0,
  // name: null
  return (
    <StyledMapPiece>
      <button>destination{index} {h}{w}</button>
    </StyledMapPiece>
  );
};

export default MapPiece;