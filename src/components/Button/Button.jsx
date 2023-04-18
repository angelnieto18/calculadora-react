import { useContext, useRef } from 'react';
import { calculatorContext } from '../../App';
import './button.css';

const Button = (props) => {
  const input = useContext(calculatorContext);

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
  const input = useContext(calculatorContext);

  const calcBtn = useRef(null);

  const handleClick = () => {
    const inputText = input.current.value;
    const lastChar = inputText.at(-1);
    let result = 0;

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
      console.log(result);
    } else {
      console.error('No es un número');
    }
  };

  return (
    <button value={props.value} ref={calcBtn} onClick={handleClick}>
      {props.value}
    </button>
  );
};

export { Button, CalcButton };
