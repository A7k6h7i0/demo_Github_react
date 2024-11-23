import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button className="button clear" onClick={handleClear}>C</button>
          <button className="button operator" onClick={() => handleButtonClick('/')}>÷</button>
          <button className="button operator" onClick={() => handleButtonClick('*')}>×</button>
          <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>

          <button className="button" onClick={() => handleButtonClick('7')}>7</button>
          <button className="button" onClick={() => handleButtonClick('8')}>8</button>
          <button className="button" onClick={() => handleButtonClick('9')}>9</button>
          <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>

          <button className="button" onClick={() => handleButtonClick('4')}>4</button>
          <button className="button" onClick={() => handleButtonClick('5')}>5</button>
          <button className="button" onClick={() => handleButtonClick('6')}>6</button>
          <button className="button equals" onClick={handleCalculate}>=</button>

          <button className="button" onClick={() => handleButtonClick('1')}>1</button>
          <button className="button" onClick={() => handleButtonClick('2')}>2</button>
          <button className="button" onClick={() => handleButtonClick('3')}>3</button>
          <button className="button zero" onClick={() => handleButtonClick('0')}>0</button>

          <button className="button" onClick={() => handleButtonClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
