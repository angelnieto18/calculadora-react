import Output from '../Output/Output';
import Button from '../Button/Button';
import './body.css';

const Body = () => {
  return (
    <div className="body">
      <div className="body__output-container">
        <Output />
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
  );
};

export default Body;
