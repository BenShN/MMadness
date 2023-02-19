import { StyledMapPiece } from "../styles";

const MapPiece = ({x, y, btnPress }) => {
    return (
        <StyledMapPiece>
            <button onClick={btnPress}>???</button>
        </StyledMapPiece>
    )
};

export default MapPiece;