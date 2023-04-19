import { useContext, useRef } from 'react';
import { calculatorContext } from '../../App';
import './button.css';

const Button = (props) => {
  const { input } = useContext(calculatorContext);

  const btn = useRef(null);

  const handleClick = () => {
    input.current.value += btn.current.value;
  };

  return (
    <button className='button' value={props.value} ref={btn} onClick={handleClick}>
      {props.content}
    </button>
  );
};

const CalcButton = (props) => {
  let { input, output, result, setResult } = useContext(calculatorContext);

  const handleClick = () => {
    const inputText = input.current.value;
    const lastChar = inputText.at(-1);

    if (
      lastChar === '1' ||
      lastChar === '2' ||
      lastChar === '3' ||
      lastChar === '4' ||
      lastChar === '5' ||
      lastChar === '6' ||
      lastChar === '7' ||
      lastChar === '8' ||
      lastChar === '9' ||
      lastChar === '0'
    ) {
      setResult((result = eval(inputText)));
      output.current.textContent = result;
    } else {
      console.error('No es un número');
    }
  };

  return (
    <button id='calcButton' value={props.value} onClick={handleClick}>
      {props.value}
    </button>
  );
};

const ClearButton = (props) => {
  const { input, output } = useContext(calculatorContext);

  const handleClick = () => {
    input.current.value = '';
  };

  return (
    <button id='clearButton' value={props.value} onClick={handleClick}>
      {props.value}
    </button>
  );
};

const EraseButton = (props) => {
  let { input } = useContext(calculatorContext);

  const handleClick = () => {
    const inputText = input.current.value;
    const newString = inputText.substring(0, inputText.length - 1);

    input.current.value = newString;
  };

  return (
    <button id='eraseButton' value={props.value} onClick={handleClick}>
      {props.value}
    </button>
  );
};

export { Button, CalcButton, ClearButton, EraseButton };
