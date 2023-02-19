import { StyledMapPiece } from "../styles";

const DestinationPiece = ({x, y, btnPress }) => {
    return (
        <StyledMapPiece>
            <button onClick={e => btnPress(e, x, y)}><h1>Destination</h1></button>
        </StyledMapPiece>
    )
};

export default DestinationPiece;