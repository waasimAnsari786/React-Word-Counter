import React, { useEffect } from "react";
import Heading from "./Heading";
import TextArea from "./TextArea";
import { API } from "./API";
import OptBtns from "./OptBtns";
import { useWordCount } from "./WordCountContext";
import LettersWords from "./LettersWords";
import ReadingTime from "./ReadingTime";
import ThemeBtns from "./ThemeBtns";
import Alert from "./Alert";

export default function WordCount2() {
  const {
    inpVal,
    handleOnChange,
    styleOftArea,
    styleOfBtns,
    charLength,
    letters,
    seconds,
    setSeconds,
    setLetters,
    undo,
    setCharLength,
    redo,
    styleOfMainDiv,
    alertText,
  } = useWordCount();

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
  }, [undo, redo]);

  useEffect(() => {
    if (charLength * 0.5) {
      if (charLength * 0.5 > 1) {
        setSeconds(`${charLength * 0.5} seconds`);
      } else if (charLength * 0.5 === 1) {
        setSeconds(`${charLength * 0.5} second`);
      } else {
        setSeconds(`${charLength * 0.5} miliseconds`);
      }
    } else {
      setSeconds("");
    }
  }, [charLength, setSeconds]);

  useEffect(() => {
    const updateTextMetrics = () => {
      setLetters((prevLetters) => {
        const newLetters = inpVal
          ? Array.from(inpVal).filter((curElem) => !/\s+/.test(curElem)).length
          : 0;
        if (newLetters !== prevLetters) {
          return newLetters;
        }
        return prevLetters;
      });

      setCharLength((prevCharLength) => {
        const newCharLength = inpVal
          ? inpVal.split(/\s+/).filter((curElem) => curElem !== "").length
          : 0;
        if (newCharLength !== prevCharLength) {
          return newCharLength;
        }
        return prevCharLength;
      });
    };

    updateTextMetrics();
  }, [inpVal, charLength, setCharLength, setLetters]);

  const [options, themBtnArr] = API();
  return (
    <>
      <div className="container-fluid" style={styleOfMainDiv}>
        <div className="container py-3">
          <div className="row">
            <Alert alText={alertText} />
            <div className="col-12 mb-3 d-flex justify-content-center align-items-md-center gap-2 flex-wrap">
              {themBtnArr.map((curElem, i) => {
                return (
                  <ThemeBtns
                    thBtnObj={curElem.themBtnObj}
                    changeThemeFunc={curElem.func}
                    parameter1={curElem.param1}
                    parameter2={curElem.param2}
                    parameter3={curElem.param3}
                    parameter4={curElem.param4}
                    btnText={curElem.text}
                    themBtnFunc={curElem.setBtnFunc}
                    key={i}
                  />
                );
              })}
            </div>
            <Heading text="word counter" property="center" />
            <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-2">
              {options.map((curElem, i) => {
                return (
                  <OptBtns
                    styleObj={styleOfBtns}
                    btnFuncs={curElem.func}
                    btnFuncs2={curElem.showAlert}
                    text={curElem.text}
                    btnArgm={inpVal}
                    key={i}
                  />
                );
              })}
            </div>
            <TextArea
              styleObj={styleOftArea}
              tValue={inpVal}
              handleOnChangeFunc={handleOnChange}
            />
            <Heading text="your text summary" property="left" />
            <div className="col-12 d-flex justify-content-start align-items-start column-gap-5">
              <LettersWords charcLength={charLength} charcWord="word" />
              <LettersWords charcLength={letters} charcWord="letter" />
            </div>
            <ReadingTime readingTime={seconds} />
          </div>
        </div>
      </div>
    </>
  );
}
