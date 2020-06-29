import React, {useState} from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(text.length);

  const removeLetter = (index) => {
    const chars = text.split('');
    chars.splice(index, 1);
    setText(chars.join(''));
    setTextLength(text.length)
  };

  const charBoxes = text.split('').map((letter, index ) => {
    return <Char letter={letter} key={index} click={() => removeLetter(index)} />
  });

  return (
    <div>
      <input value={text} onChange={(event) => {
        setText(event.target.value);
        setTextLength(event.target.value.length)
      }}/>
      <p>{text}</p>
      <Validation textLength={textLength}/>
      {charBoxes}
    </div>
  );
}

export default App;
