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

export default Button;
