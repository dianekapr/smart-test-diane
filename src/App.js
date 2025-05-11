import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formInput, setFormInput] = useState({
    input: "",
    result: 0,
  });

  function handleInput(e) {
    //please put your logic here
    const val = e.target.value;

    if (!isNaN(val) && !val.includes(".") && !val.includes(",")) {
      setFormInput((prev) => ({
        ...prev,
        input: val,
      }));
    }
  }

  function handleSubmit() {
    const { input } = formInput;

    if (input === "") {
      setFormInput({
        input: "",
        result: 0,
      });
      return;
    }

    const original = parseInt(input, 10);
    const reversed = parseInt(input.split("").reverse().join(""), 10);
    const difference = Math.abs(original - reversed);

    setFormInput((prev) => ({
      ...prev,
      result: difference,
    }));
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="input-section">
          <label htmlFor="number-input" className="input-label">
            Number:
          </label>
          <div className="input">
            <input
              type="text"
              id="number-input"
              value={formInput.input}
              onChange={handleInput}
              className="number-input"
              placeholder="Enter a number"
              aria-label="Enter a number to calculate difference"
            />
            <button
              onClick={handleSubmit}
              className="submit-button"
              aria-label="Submit"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="result-section">
          <h3 className="result-title">Result: </h3>
          <div className="resul-value" aria-live="polite">
            {formInput.result}
          </div>
        </div>
      </div>
    </div>
  );
}
