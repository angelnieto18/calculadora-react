import { useContext, useRef } from 'react';
import { calculatorContext } from '../../App';
import './button.css';

const Button = (props) => {
  const { input, output } = useContext(calculatorContext);

  const btn = useRef(null);

  const handleClick = () => {
    input.current.value += btn.current.value;
  };

  return (
    <button value={props.value} ref={btn} onClick={handleClick}>
      {props.value}
    </button>
  );
};

const CalcButton = (props) => {
  const { input, output } = useContext(calculatorContext);

  const handleClick = () => {
    const inputText = input.current.value;
    const lastChar = inputText.at(-1);
    let result;

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
      result = eval(inputText);
      output.current.textContent = result;
    } else {
      console.error('No es un número');
    }
  };

  return (
    <button value={props.value} onClick={handleClick}>
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
    <button value={props.value} onClick={handleClick}>
      {props.value}
    </button>
  );
};

export { Button, CalcButton, ClearButton };
