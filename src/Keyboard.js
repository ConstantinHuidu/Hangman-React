import React, { useState, useEffect } from 'react'

export default function Keyboard(props) {

    const [btnDisabled, setBtnDisabled] = useState([]);
    const [lives, setLives] = useState(6);
    const [gameStatus, setGameStatus] = useState('');
    const [notificationClassName, setNotificationClassName] = useState('');
    const [replayClassName, setReplayClassName] = useState('replay-btn');
    

    //create the string of letters that I will use to generate the keyboard
    let letters = '';
    function createLetters() {
        for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i) {
            letters += String.fromCharCode(i)
        }
    }
    createLetters()


    //build on-screen keeyboard
    function buildKeyboard() {
        return letters.split("").map(letter => (
            <button
                className='btn btn-sm btn-secondary'
                key={letter}
                value={letter}
                onClick={(e) => handleLetterClick(e) }
                disabled={btnDisabled.includes(letter) || !props.newWord}
            >
                {letter}
            </button>
        ))
    }

    //logic for clicking on a letter
    function handleLetterClick(e) {
        let letter = e.target.value;
        setBtnDisabled(btnDisabled => [...btnDisabled, letter])
        if (props.newWord.toUpperCase().includes(letter)) {
            props.setGuessedLetters(guessedLetter => [...guessedLetter, letter])
            e.target.className="btn btn-sm btn-success"
        } else {
            e.target.className="btn btn-sm btn-danger"
            setLives(lives - 1)
        }
    }

    useEffect(() => {
        if (lives === 0) {
            setGameStatus(`The word you were looking for is:  ${props.newWord.toUpperCase()}. Better luck next time!`)
            disableAllBtns()
            setNotificationClassName('text-danger')
            setReplayClassName('btn btn-info')
        } else if (props.hiddenWord().join("") == props.newWord.toUpperCase() && props.newWord !== '' ) {
            setGameStatus('Congratulations, You Won!')
            disableAllBtns()
            setNotificationClassName('text-success')
            setReplayClassName('btn btn-info')
        }
    }, [lives, props.newWord, props.guessedLetters])
    
    function disableAllBtns() {
        letters.split("").map(letter => {
            setBtnDisabled(btnDisabled => [...btnDisabled, letter])
        })
    }

  return (
      <>
        <div className="keyboard-container"> {buildKeyboard()}</div>
        <div className="notifications"> Lives left: { lives } </div>
        <div className={`notifications ${notificationClassName}`}> { gameStatus } </div>
        <div className="replay-btn-container">
            <button className={replayClassName} onClick={() => window.location.reload(false)}>Play again</button>
        </div>
      </>

  )
}
