import { StyledMapPiece } from "../styles";

<<<<<<< HEAD
const MapPiece = ({ x, y }) => {
=======
const MapPiece = ({ index, h, w, btnPress }) => {
>>>>>>> cb09734 (Added initial  rendering and array)
  // x: 0,
  // y: 0,
  // name: null
  /*
  return (
    <StyledMapPiece>
      <button>destination ({x}, {y})</button>
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