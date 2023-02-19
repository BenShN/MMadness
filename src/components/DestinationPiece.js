import { StyledMapPiece } from "../styles";

const DestinationPiece = ({ btnPress }) => {
    return (
        <StyledMapPiece>
            <button onClick={e => btnPress(e)}><h1>Destination</h1></button>
        </StyledMapPiece>
    )
};

export default DestinationPiece;