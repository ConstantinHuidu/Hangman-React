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

//   const hiddenWord = useCallback(() => {
//     // console.log(props.guessedLetters)
//     return newWord.toUpperCase().split("").map(
//       letter => (guessedLetters.includes(letter) ? letter : " _ ")
//       );
//  }, [guessedLetters, newWord])

  return (
    <>
      <div>
        <h1>HANGMAN</h1>
        <AddWord 
          newWord = { newWord } setNewWord = { setNewWord }
          guessedLetters = { guessedLetters } setGuessedLetters = { setGuessedLetters }
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
