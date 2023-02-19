import { StyledMapPiece } from "../styles";

const MapPiece = ({x, y, btnPress}) => {
    return (
        <StyledMapPiece>
            <button onClick={e => {btnPress(e, x, y) ;}}></button>
        </StyledMapPiece>
    )
};

export default MapPiece;