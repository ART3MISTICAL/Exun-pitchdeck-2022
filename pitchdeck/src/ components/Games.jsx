import * as React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import sonic from "../hack_games_imgs/sonic.gif";
// import tetris from "../hack_games_imgs/Tetris2.png";
// import mario from "../hack_games_imgs/mario.jpeg";
import contragif from "../hack_games_imgs/contragif.gif";
import tetrisgif from "../hack_games_imgs/tetrisgif.gif";
import super_mariogif from "../hack_games_imgs/super_mario.gif";
import pacman from "../hack_games_imgs/pacman.gif";
import street_fighter from "../hack_games_imgs/street_fighter.gif";
import princeOfPersia from "../hack_games_imgs/prince_of_persia.gif";
import sonic from "../hack_games_imgs/sonic_hedgehog.gif";

const Games = () => {
  const allGames = [
    {
      name: "Tetris",
      link: "https://tetris.com/play-tetris/",
      img: tetrisgif,
      description:
        "Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to rotate falling blocks strategically to clear levels",
    },
    {
      name: "Super mario",
      link: "https://supermario-game.com/",
      img: super_mariogif,
      description:
        "Super Mario Bros.is a platform game.Mario must race through the Mushroom Kingdom and save Princess Toadstool from Bowser. Mario jumps, runs, and walks across each level. The worlds are full of enemies and platforms, and open hole",
    },
    {
      name: "Pacman",
      link: "https://freepacman.org/",
      img: pacman,
      description:
        "Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts ",
    },
    {
      name: "Contra",
      link: "https://www.retrogames.cz/play_022-NES.php",
      img: contragif,
      description:
        "Contra is a run-and-gun shooter video game developed and published by Konami, originally developed as a coin-operated arcade game in 1986",
    },
    {
      name: "Prince of Persia",
      link: "https://www.retrogames.cz/play_102-DOS.php",
      img: princeOfPersia,
      description:
        "Prince of persia is built around a series of action-adventure games focused on various incarnations of the eponymous Prince, set in ancient and medieval Persia",
    },
    {
      name: "Street Fighter",
      link: "https://www.retrogames.cz/play_304-SNES.php",
      img: street_fighter,
      description:
        "The player controls martial artist Ryu to compete in a worldwide martial arts tournament spanning five countries and 10 opponents",
    },
    {
      name: "Sonic The HedgeHog",
      link: "https://www.retrogames.cz/play_117-Genesis.php",
      img: sonic,
      description:
        "Sonic is an anthropomorphic blue hedgehog who can run at supersonic speeds and curl into a ball, primarily to attack enemies. In most games, Sonic must race through levels, collecting power-up rings and avoiding obstacles and enemies",
    },
  ];
  return (
    <div className="game-area">
      {/* <h1 className='ct'>{allGames[0].name}</h1> */}
      {allGames.map((game) => {
        return (
          <React.Fragment>
            <div>
              <li className="ct">
                {/* <img src={tetris}></img> */}
                <img alt="" style={{ maxHeight: "200px" }} src={game.img}></img>
              </li>
            </div>
            <div
              style={{ textAlign: "center", color: "white", fontSize: "30px" }}
            >
              {game.name}
              <li className="ct">
                <br />
                <br />
                <p>{game.description}</p>
              </li>
              <div className="ct">
                {/* <Link to={game.link} style={{ width: "600px" }}>
                  <button className="btn">PLAY</button>
                </Link> */}
                <a
                  style={{ width: "600px" }}
                  className="btn button button_outlined"
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`PLAY ${game.name.toUpperCase()}`}
                </a>
              </div>
            </div>
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
