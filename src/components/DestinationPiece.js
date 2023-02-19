import { StyledMapPiece } from "../styles";

const DestinationPiece = ({ btnPress }) => {
    return (
        <StyledMapPiece>
            <button onClick={e => btnPress(e)}></button>
        </StyledMapPiece>
    )
};

export default DestinationPiece;