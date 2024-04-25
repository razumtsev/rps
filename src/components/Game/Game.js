import React, { useState } from 'react';
import './Game.css';

export default function Game() {
  const [info, setInfo] = useState('');
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const elements = ['rock', 'paper', 'scissors'];
  const visualisation = playerOne ? playerOne + ' vs ' + playerTwo : 'Try not to loose!';

  const checkWinner = (player, AI) => {
    // player === AI 
    //   ? setInfo('This is a Draw') 
    //   : player === 'rock' && AI === 'scissors' 
    //     ? setInfo('you WIN')
    //     : player === 'paper' && AI === 'rock'
    //       ? setInfo('you WIN') 
    //       : player === 'scissors' && AI === 'paper' 
    //         ? setInfo('you WIN')
    //         : setInfo('you LOSE');
    const rockWins = (player === 'rock' && AI === 'scissors');
    const paperWins = (player === 'paper' && AI === 'rock');
    const scissorsWins = (player === 'scissors' && AI === 'paper');
    if (player === AI) return setInfo('This is a Draw');
    if (rockWins || paperWins || scissorsWins) {
      return setInfo('you WIN');
    } 
    return setInfo('you LOSE');
  }

  const handleClick = (playerChoice) => {
    setInfo('')
    const randomElement = getRandomElement(elements);
    // console.log('Your choice:', playerChoice);
    // console.log('Comp choice:', randomElement);
    setPlayerOne(playerChoice);
    setPlayerTwo(randomElement);
    checkWinner(playerChoice, randomElement);
  }

  return (
    <div className='game'>
      <h1 className='game__name'>Rock Paper Scissors</h1>
      <div className='game__visualisation'>{visualisation}</div>
      <div className='game__info'>{info}</div>
      <div className='game__buttons'>
        <button className='game__button' type='button' onClick={() => {handleClick('rock')}}>rock</button>
        <button className='game__button' type='button' onClick={() => {handleClick('paper')}}>paper</button>
        <button className='game__button' type='button' onClick={() => {handleClick('scissors')}}>scissors</button>
      </div>
    </div>
  )
}
