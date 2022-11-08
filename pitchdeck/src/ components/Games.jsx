import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getGames() {
      const allGames = await axios.get(
        "https://retro-games-api.devansharora.repl.co/"
      );
      setGames(allGames.data);
    }
    getGames();
  });

  return (
    <div className="game-area">
      {/* {console.log(games)} */}
      {/* <h1 className='ct'>{allGames[0].name}</h1> */}
      {games.map((game) => {
        return (
          <React.Fragment>
            {/* <div> */}
            {/* <li className="ct"> */}
            {/* <img src={tetris}></img> */}
            {/* <img alt="" style={{ maxHeight: "200px" }} src={game.img}></img> */}
            {/* </li> */}
            {/* </div> */}

            <table>
              <thead>
                <tr className="table-heading">
                  <th scope="col"> {game.name} </th>
                  <th scope="col">Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td data-label="Images">
                    {
                      <img
                        alt=""
                        style={{ maxHeight: "200px" }}
                        src={game.img}
                      ></img>
                    }
                  </td>
                  <td data-label="Play">
                    <center>
                      <div className="table-ct">{game.description} </div>
                      <form action="" method="post">
                        <button
                          type="submit"
                          value="Play"
                          style={{ width: "110px", marginTop: "20px" }}
                          className="btn"
                        >
                          {`PLAY`}
                        </button>
                      </form>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </React.Fragment>
        );
      })}
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
