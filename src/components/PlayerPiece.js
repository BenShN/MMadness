import { StyledMapPiece } from "../styles";

const PlayerPiece = (index) => {
    return (
        <StyledMapPiece>
            <div className="playerimg-container">
                <img className="playerimg" src="https://media.discordapp.net/attachments/1076560020449263622/1076743578690261013/1494526-removebg-preview.png" />
            </div>
        </StyledMapPiece>
    )
};

export default PlayerPiece;