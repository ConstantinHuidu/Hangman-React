import React, { useState } from 'react';
import AddWord from './AddWord';
import Keyboard from './Keyboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [newWord, setNewWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);

  function hiddenWord() {
    return newWord.toUpperCase().split("").map(
      letter => (guessedLetters.includes(letter) ? letter : " _ ")
      );
  }

  return (
    <>
      <div>
        <h1>HANGMAN</h1>
        <AddWord 
          newWord = { newWord } setNewWord = { setNewWord }
          hiddenWord = { hiddenWord }
        />
        <Keyboard 
          newWord = { newWord }
          guessedLetters = { guessedLetters } setGuessedLetters = { setGuessedLetters }
          hiddenWord = { hiddenWord }
        />
      </div>
    </>
  );
}

export default App;
