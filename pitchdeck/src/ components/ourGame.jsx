import * as React from "react";
// import {  Link } from 'react-router-dom'

const OurGame = () => {
  return (
    <div className="ourgame">
      <h1 className="heading">About the Game</h1>
      {/* <h2>About:</h2> */}
      <h3>
        {/* <div className='ct'> Exit Armageddon, a text based adventure RPG, based in the year 2025 and in the utopia "Ihleda",</div>
		<div className='ct'> and the story revolves around a 17 year old Annubis (the player), Who is tasked with setting Amglena free.</div>
		<div className='ct'>The Game is full of Twists and Turns and a lot of suprises which keep you hooked throughout!</div> */}
        <div className="ct">
          Exit Armageddon, a text based adventure RPG, based in the year 2025
          and in the utopia "Ihleda". The Game is full of Twists and Turns and a
          lot of suprises which keep you hooked throughout! The Game is full of
          Twists and Turns and a lot of suprises which keep you hooked
          throughout!
        </div>
      </h3>

      <h2 className="heading">How to play</h2>
      <h3>
        <p className="ct">
          {" "}
          Due to the retro design, the game is completely based out of a
          terminal and you need to just type the option required.
        </p>
      </h3>

			<center className='play-btn'>
      <a
        className="btn "
        href="https://exun-2022-dps-fbd.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play the Game!
      </a>
			</center>
    </div>
  );
};

export default OurGame;
