import { Link } from "react-router-dom";
import TextInputFormContainer from "../Components/TextInputForm/TExtInputFormContainer";
function StartGame(){
    return(
        <> {/*React Fragment */}
        <h1>Start Game</h1>
        <TextInputFormContainer />
        <Link to="/play" className="text-blue-400">Play Game Link </Link> {/*Here we also used the anchor tag but the Anchot Tag
            refresh the page but we don't want this so we use Link */}
        
        </>
        
    );
}

export default StartGame;