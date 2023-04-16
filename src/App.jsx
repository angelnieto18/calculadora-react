import { createContext, useRef } from 'react';
import Button from './components/Button/Button';
import './App.css';

export const calculatorContext = createContext(null);

const App = () => {
  const input = useRef(null);

  return (
    <calculatorContext.Provider value={input}>
      <div className="body">
        <div className="body__output-container">
          <label>
            <input type="text" ref={input} />
          </label>
        </div>
        <div className="body__buttons-container">
          <Button value="9" />
          <Button value="8" />
          <Button value="7" />
          <Button value="6" />
          <Button value="5" />
          <Button value="4" />
          <Button value="3" />
          <Button value="2" />
          <Button value="1" />
          <Button value="0" />
          <Button value="=" />
          <Button value="+" />
          <Button value="-" />
          <Button value="*" />
          <Button value="/" />
        </div>
      </div>
    </calculatorContext.Provider>
  );
};

export default App;
