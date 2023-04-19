import { createContext, useRef, useState } from 'react';
import { Button, CalcButton, ClearButton, EraseButton } from './components/Button/Button';
import './App.css';

export const calculatorContext = createContext(null);

const App = () => {
  const [result, setResult] = useState(0);

  const input = useRef(null);
  const output = useRef(null);

  return (
    <calculatorContext.Provider value={{ input, output, result, setResult }}>
      <div className='body'>
        <div className='body__input-container'>
          <label>
            <input id='input' type='text' ref={input} />
          </label>
        </div>
        <div className='body__output-container'>
          <h1 id='output' ref={output}>
            {result}
          </h1>
        </div>
        <div className='body__buttons-container'>
          <Button value='7' content='7' />
          <Button value='8' content='8' />
          <Button value='9' content='9' />
          <Button value='/' content='&#247;' />
          <Button value='4' content='4' />
          <Button value='5' content='5' />
          <Button value='6' content='6' />
          <Button value='*' content='&#215;' />
          <Button value='1' content='1' />
          <Button value='2' content='2' />
          <Button value='3' content='3' />
          <Button value='-' content='-' />
          <Button value='0' content='0' />
          <EraseButton value='del' />
          <ClearButton value='c' />
          <Button value='+' content='+' />
          <CalcButton value='=' content='=' />
        </div>
      </div>
    </calculatorContext.Provider>
  );
};

export default App;
