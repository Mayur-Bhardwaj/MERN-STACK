import { Link, useLocation, useParams, useSearchParams,  } from "react-router-dom";

function PlayGame(){

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));  //This is not uuseful in our game because the text will be shown in the url
    //The url is http://localhost:5173/play?text=kudf

    //Other Way is Path Params
//   const { text } =  useParams();
    //The url is http://localhost:5173/play/Ram

    const { state } = useLocation();
    console
    return(
        <>
            {/*// <h1>Play Game {text} </h1> */}
            <h1> Play Game {state.wordSelected} </h1>
            <Link to="/start" className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;