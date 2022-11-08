import * as React from "react";
// import axios from "axios";
import { useState } from "react";
import List from "./List";

const Games = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    // console.log(lowerCase);
    setInputText(lowerCase);
  };

  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   async function getGames() {
  //     const allGames = await axios.get(
  //       "https://retro-games-api.devansharora.repl.co/"
  //     );
  //     setGames(allGames.data);
  //   }
  //   getGames();
  // });

  return (
    <div className="game-area">
      <div className="main">
        <h1 className="ct">Search</h1>
        <div className="search">
          <input
            className="search-bar"
            //id="outlined-basic"
            onChange={inputHandler}
            placeholder="Search"
            type="text"
            label="Search"
          />
          {/*<input type="text" id="link" name="url" placeholder="Enter link here"></input>*/}
        </div>
      </div>
      <List input={inputText} />
      {/* {console.log(games)} */}
      {/* <h1 className='ct'>{allGames[0].name}</h1> */}
      {/* <View key={index}>
    				`{item.item}
    				`</View> */}
    </div>
  );
};

export default Games;

// <div
//               style={{ textAlign: "center", color: "white", fontSize: "30px" }}
//             >
//               {game.name}
//               <li key="" className="ct">
//                 <br />
//                 <br />
//                 {/* {console.log(game.description)} */}
//                 <p>{game.description}</p>
//               </li>
//               <div className="ct">
//                 {/* <Link to={game.link} style={{ width: "600px" }}>
//                   <button className="btn">PLAY</button>
//                 </Link> */}
//                 <a
//                   style={{ width: "600px" }}
//                   className="btn"
//                   href={game.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {`PLAY ${game.name.toUpperCase()}`}
//                 </a>
//               </div>
//             </div>
