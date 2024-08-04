import React, { useEffect, useState } from "react";

export default function WordCount() {
  const [inpVal, setInpVaL] = useState();
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [word, setWord] = useState();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "z") {
        event.preventDefault();
        undo();
      } else if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "y" || (event.shiftKey && event.key === "z"))
      ) {
        event.preventDefault();
        redo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep, history]);

  const undo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setInpVaL(history[currentStep - 1]);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setInpVaL(history[currentStep + 1]);
    }
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    const newHistory = [...history.slice(0, currentStep + 1), newText];
    setHistory(newHistory);
    setCurrentStep(newHistory.length - 1);
    setInpVaL(newText);
    setWord(newText ? newText.split(" ").length * 0.5 : "");
  };

  const upperCase = (str) => str.toUpperCase();
  const lowerCase = (str) => str.toLowerCase();

  const toglCase = (str) => {
    let splitedArr = str.split(" ");
    let repFChar = splitedArr.map((curElem) => {
      let fCap = curElem.replace(curElem[0], curElem[0].toLowerCase());
      let slicedArr = curElem.slice(1).toUpperCase();
      return `${fCap[0]}${slicedArr}`;
    });
    return repFChar.join(" ");
  };

  const senCase = (str) => {
    let fCap = str.replace(str[0], str[0].toUpperCase());
    let slicedArr = str.slice(1).toLowerCase();
    return `${fCap[0]}${slicedArr}`;
  };

  const changeCase = (tranformFunc) => {
    setInpVaL(tranformFunc(inpVal));
  };

  const printWord = () => {
    if (word) {
      if (word > 1) {
        return `${word} seconds`
      }else if (word === 1) {
        return `${word} second`
      } else {
        return `${word} milisecond`
      }
    }else{
      return ''
    }
  };

  return (
    <>
      <div className="container">
        <div className="col-12 py-5">
          <h1 className="text-center mb-5 text">word counter</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap my-5 wr-count-btns gap-2">
            <button onClick={() => changeCase(upperCase)}>uppercase</button>
            <button onClick={() => changeCase(lowerCase)}>lowercase</button>
            <button onClick={() => changeCase(senCase)}>sentence case</button>
            <button onClick={() => changeCase(toglCase)}>toggle case</button>
            <button onClick={undo} disabled={currentStep <= 0}>
              Undo
            </button>
            <button onClick={redo} disabled={currentStep >= history.length - 1}>
              Redo
            </button>
          </div>

          <textarea
            value={inpVal}
            onChange={handleOnChange}
            name="t-area"
            className="p-3 w-100 inp-filed"
            placeholder="write your text..."
            rows={10}
          ></textarea>

          <h1 className="text mt-5">your text summary</h1>
          <div className="col-12 d-flex justify-content-start align-items-start column-gap-5">
            <h3>
              {inpVal
                ? inpVal.split(" ").length > 1
                  ? `${inpVal.split(" ").length} words`
                  : `${inpVal.split(" ").length} word`
                : "0 words"}
            </h3>

            <h3>
              {inpVal
                ? inpVal.length > 1 || inpVal.length === 0
                  ? `${inpVal.length} letters`
                  : `${inpVal.length} letter`
                : "0 letters"}
            </h3>
          </div>

          <p>{word ? `According to gooogle ${printWord()} required for read this text.` : ''}</p>
        </div>
      </div>
    </>
  );
}