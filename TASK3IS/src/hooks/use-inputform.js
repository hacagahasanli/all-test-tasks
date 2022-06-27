import { useState } from "react";

const useInput = (validate) => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const hasError = validate(enteredValue);
  const checker = !hasError && isTouched;

  const enteredValueHandler = (e) => {
    e.preventDefault();
    setEnteredValue(e.target.value);
  };

  const isBlurHandler = (e) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    valueIsInValid: hasError,
    errorChecker: checker,
    blurHandler: isBlurHandler,
    enteredValueHandler: enteredValueHandler,
  };
};

export default useInput;
