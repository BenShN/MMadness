import { StyledMapPiece } from "../styles";

const MapPiece = ({ x, y }) => {
  // x: 0,
  // y: 0,
  // name: null
  return (
    <StyledMapPiece>
      <button>destination ({x}, {y})</button>
    </StyledMapPiece>
  );
};

export default MapPiece;