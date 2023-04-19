import { createContext, useRef, useState } from 'react';
import { Button, CalcButton, ClearButton } from './components/Button/Button';
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
          <Button value='9' />
          <Button value='8' />
          <Button value='7' />
          <Button value='6' />
          <Button value='5' />
          <Button value='4' />
          <Button value='3' />
          <Button value='2' />
          <Button value='1' />
          <Button value='0' />
          <Button value='+' />
          <Button value='-' />
          <Button value='*' />
          <Button value='/' />
          <CalcButton value='=' />
          <ClearButton value='c' />
        </div>
      </div>
    </calculatorContext.Provider>
  );
};

export default App;
