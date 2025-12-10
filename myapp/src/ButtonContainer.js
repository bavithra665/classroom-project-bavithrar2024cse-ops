import Button from "./Button";

const ButtonContainer = ({ handleIncrement, handleDecrement }) => {
  return (
    <div className="buttons">
      <Button text="Increment" func={handleIncrement} as="inc" />
      <Button text="Decrement" func={handleDecrement} as="dec" />
    </div>
  );
};

export default ButtonContainer;