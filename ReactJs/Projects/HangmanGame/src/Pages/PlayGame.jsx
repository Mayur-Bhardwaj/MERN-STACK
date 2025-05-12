import { Link, useLocation, useParams, useSearchParams,  } from "react-router-dom";
import MaskedText from "../Components/MaskedText/MaskedText";

function PlayGame(){

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));  //This is not uuseful in our game because the text will be shown in the url
    //The url is http://localhost:5173/play?text=kudf

    //Other Way is Path Params
//   const { text } =  useParams();
    //The url is http://localhost:5173/play/Ram

    const { state } = useLocation();

    // const arr = ["hello","world"];
    
    return(
        <>
            {/*// <h1>Play Game {text} </h1> */}
            <h1> Play Game { state.wordSelected } </h1>

            {/*//When we render the list we pass the key */}

            // <MaskedText text={state.wordSelected} guessedLetters={['H', 'E']}/>
            <Link to="/start" className="text-blue-400">Start Game Link</Link>
        </>
    );
}     

export default PlayGame;