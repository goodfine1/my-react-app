import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: clickCount % 2 === 0 ? '#f4f4f4' : '#ffebcd',
      }}
    >
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default App;