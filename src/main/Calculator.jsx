import React, { useState } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const clearMemory = () => {
    setState(initialState);
  };

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState((prev) => ({
        ...prev,
        operation,
        current: 1,
        clearDisplay: true,
      }));
    } else {
      const equals = operation === "=";
      const currentOperation = state.operation;
      const values = [...state.values];
      try{
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      }
      catch(e){
        values[0] = eval(`${values[0]} ${currentOperation} ${values[0]}`);
      }
      values[1] = 0;

      setState((prev) => ({
        ...prev,
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      }));
    }
  };

  const addDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + n;
    setState((prev) => ({ ...prev, displayValue, clearDisplay: false }));

    if (n !== ".") {
      const i = state.current;
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[i] = newValue;
      setState((prev) => ({ ...prev, values }));
      console.log(values);
    }
  };

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={setOperation} operation />
      <Button label="7" click={addDigit} />
      <Button label="8" click={addDigit} />
      <Button label="9" click={addDigit} />
      <Button label="*" click={setOperation} operation />
      <Button label="4" click={addDigit} />
      <Button label="5" click={addDigit} />
      <Button label="6" click={addDigit} />
      <Button label="-" click={setOperation} operation />
      <Button label="1" click={addDigit} />
      <Button label="2" click={addDigit} />
      <Button label="3" click={addDigit} />
      <Button label="+" click={setOperation} operation />
      <Button label="0" click={addDigit} double />
      <Button label="." click={addDigit} />
      <Button label="=" click={setOperation} operation />
    </div>
  );
};

export default Calculator;
