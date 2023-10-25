import React, { useState } from 'react';
import './App.css';
import QuestWindow from './components/QuestWindow';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const startGame = () => {
    setIsOpen(true);
  };

  const closeGame = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Тест ПРО</h1>
        <button onClick={startGame} className="startQuest">
          <div className="startInner">Запустить тестирование</div>
        </button>
      </div>
      {isOpen && <QuestWindow onClose={closeGame} />}
    </div>
  );
}

export default App;
