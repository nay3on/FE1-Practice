import React, { useState } from 'react';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const texts = [
    "(●'◡'●)",
    "(❁´◡`❁)",
    "╰(*°▽°*)╯",
    "O_O",
    "( •̀ ω •́ )✧",
    "(๑•̀ㅂ•́)و✧",
    "( ͡° ͜ʖ ͡°)",
    "(っ °Д °;)っ",
    "╰（‵□′）╯",
    "ლ(╹◡╹ლ)"
  ];

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-text">
          {texts[index]}
        </p>
        <button onClick={handleClick} className="App-button">
          클릭
        </button>
      </header>
    </div>
  );
}

export default App;