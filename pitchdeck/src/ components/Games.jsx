import * as React from 'react'
import { useState, useEffect } from 'react';



const Games = () => {

    const allGames = [
        {name:"Tetris", img:""},
        {name:"Super mario",img:""},
        {name:"Pacman",img:""},
        {name:"Contra",img:""},
        {name:"Prince of Persia",img:""},
        {name:"Street Fighter",img:""},
        {name:"Sonic The HedgeHog",img:""},
    ]
    return ( 
        <div className='game-area'>
            {/* <h1 className='ct'>{allGames[0].name}</h1> */}
            {allGames.map((game) => {
                    return <li className='ct'>{game.name}</li>
            })}
            {/* <View key={index}>
    				`{item.item}
    				`</View> */}
        </div>
     );
}
 
export default Games;