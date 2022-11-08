// import { React, useState, useEffect } from "react";
// import axios from "axios";
// import "./List.css";

// function List(props) {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     async function getGames() {
//       const allGames = await axios.get(
//         "https://retro-games-api.devansharora.repl.co/"
//       );
//       setGames(allGames.data);
//       console.log(games);
//     }
//     getGames();
//   });

//   const filteredData = games.filter((e) => {
//     if (props.input === "") {
//       //   console.log(e);
//       return e;
//     } else {
//       return e.name.toLowerCase().includes(props.input);
//     }
//   });
//   return filteredData.map((game) => {
//     return (
//       <table>
//         {/* //   <React.Fragment> */}
//         {/* <div> */}
//         {/* <li className="ct"> */}
//         {/* <img src={tetris}></img> */}
//         {/* <img alt="" style={{ maxHeight: "200px" }} src={game.img}></img> */}
//         {/* </li> */}
//         {/* </div> */}

//         <thead>
//           <tr className="table-heading">
//             <th scope="col"> {game.name} </th>
//             <th scope="col">Description</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td data-label="Images">
//               {<img alt="" style={{ maxHeight: "200px" }} src={game.img}></img>}
//             </td>
//             <td data-label="Play">
//               <center>
//                 <div className="table-ct">{game.description} </div>
//                 {/* <form action={game.link} method="post"> */}
//                 {/* <a
//                         href={game.link}
//                         type="submit"
//                         value="Play"
//                         style={{ width: "110px", marginTop: "20px" }}
//                         className="btn ct"
//                       >
//                         {`PLAY`}
//                       </a>
//                       </form> */}
//                 <a
//                   style={{ width: "110px", marginTop: "20px" }}
//                   className="btn ct"
//                   href={game.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {`PLAY`}
//                 </a>
//               </center>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   });
// }

// export default List;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";
import Loading from "./Loading";

function List(props) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGames() {
      const allGames = await axios.get(
        "https://retro-games-api.devansharora.repl.co/"
      );
      setIsLoading(false);
      setGames(allGames.data);
    }
    getGames();
  });

  const filteredData = games.filter((e) => {
    if (props.input === "") {
      //   console.log(e);
      return e;
    } else {
      return e.name.toLowerCase().includes(props.input);
    }
  });
  return filteredData.map((game) => {
    return isLoading ? (
      <Loading />
    ) : (
      <table>
        <thead>
          <tr className="table-heading">
            <th scope="col"> {game.name} </th>
            <th scope="col">Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td data-label={`${game.name}`}>
              {
                <center>
                  <img
                    alt=""
                    style={{ maxHeight: "200px", maxWidth: "300px" }}
                    src={game.img}
                  />
                </center>
              }
            </td>
            <td data-label="Play">
              <center>
                <div className="table-ct">{game.description} </div>
                <a
                  style={{ width: "110px", marginTop: "20px" }}
                  className="btn ct"
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`PLAY`}
                </a>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
}

export default List;
