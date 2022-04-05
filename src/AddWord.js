import React, { useRef } from 'react';

export default function AddWord(props) {
    
    const input = useRef();

    function handleGuess(e) {
        const word = input.current.value;
        if (word === '') return;
        props.setNewWord(word);
        input.current.value = null;
        e.target.disabled = true;
    }

  return (
    <>
        <h3>Type a word in the box below</h3>
        <div className="add-word">
            <input type="text" ref = {input}></input>            
            <button className="btn btn-info" onClick={handleGuess}>Guess</button>
            <div className="hidden-word"> { props.hiddenWord() } </div>
        </div>
    </>
  )
}
