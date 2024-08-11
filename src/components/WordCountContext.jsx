import React, { createContext, useContext, useState } from "react";

const WordCountContext = createContext();

export function WordCountProvider({ children }) {
  const [inpVal, setInpVaL] = useState("");
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [charLength, setCharLength] = useState(0);
  const [letters, setLetters] = useState(0);
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [themeBgColor, setThemeBgColor] = useState("");
  const [themeBtnBgColor, setThemeBtnBgColor] = useState("#420000");
  const [themeBtnBgColor2, setThemeBtnBgColor2] = useState("#0a0252");
  const [themeBtnBgColor3, setThemeBtnBgColor3] = useState("#003516");
  const [themeBtnBgColor4, setThemeBtnBgColor4] = useState("#1717d1");
  const [themeBoxShadow, setThemeBoxShadow] = useState("#6995e9");
  const [seconds, setSeconds] = useState("");
  const [alertText, setAlertText] = useState("");

  const showAlert = (alText) => {
    if (inpVal.length > 0) {
      let div = document.querySelector(".alert");
      requestAnimationFrame(() => {
        div.style.transform = "translateY(0%)";
        div.style.opacity = "1";
        setTimeout(() => {
          div.style.transform = "translateY(-100%)";
          div.style.opacity = "0";
        }, 1500);
      });
      setAlertText(alText);
    }
  };

  const upperCase = (str) => {
    if (str) {
      let splitedArr = str
        .split(" ")
        .filter((curElem) => curElem !== "")
        .join(" ");
      setInpVaL(splitedArr.toUpperCase());
    }
  };

  const lowerCase = (str) => {
    if (str) {
      let splitedArr = str
        .split(" ")
        .filter((curElem) => curElem !== "")
        .join(" ");
      setInpVaL(splitedArr.toLowerCase());
    }
  };

  const toglCase = (str) => {
    if (str) {
      let splitedArr = str.split(" ").filter((curElem) => curElem !== "");
      let repFChar = splitedArr.map((curElem) => {
        let fCap = curElem.replace(curElem[0], curElem[0].toLowerCase());
        let slicedArr = curElem.slice(1).toUpperCase();
        return `${fCap[0]}${slicedArr}`;
      });
      setInpVaL(repFChar.join(" "));
    }
  };

  const senCase = (str) => {
    if (str) {
      let splitedArr = str.split(".");
      let remSpaces = splitedArr.map((curElem) =>
        curElem
          .split(" ")
          .filter((curElem) => curElem !== "")
          .join(" ")
      );
      let filteredArr = remSpaces
        .filter((curElem) => curElem !== "")
        .map((innElem) => {
          return innElem[0].toUpperCase() + innElem.slice(1).toLowerCase();
        });
      setInpVaL(filteredArr.join(". "));
    }
  };

  const copyText = (val) => {
    navigator.clipboard.writeText(val);
  };

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
    setLetters(
      Array.from(newText).filter((curElem) => !/\s/.test(curElem)).length
    );
    setCharLength(
      newText.split(/\s+/).filter((curElem) => curElem !== "").length
    );
  };

  const changeTheme = (textColor, btnBgColor, themeColor, boxShadowcolor) => {
    setColor(textColor);
    setBgColor(btnBgColor);
    setThemeBgColor(themeColor);
    setThemeBoxShadow(boxShadowcolor);
  };

  const styleOftArea = {
    color: color,
    backgroundColor: bgColor,
    boxShadow: `0 0 15px 3px ${themeBoxShadow}`,
  };

  const styleOfBtns = {
    color: color,
    backgroundColor: bgColor,
  };

  const styleOfMainDiv = {
    color: color,
    backgroundColor: themeBgColor,
    height: "100vh",
  };

  const styleOfThemeBtn = {
    backgroundColor: themeBtnBgColor,
  };

  const styleOfThemeBtn2 = {
    backgroundColor: themeBtnBgColor2,
  };

  const styleOfThemeBtn3 = {
    backgroundColor: themeBtnBgColor3,
  };

  const styleOfThemeBtn4 = {
    backgroundColor: themeBtnBgColor4,
  };

  return (
    <WordCountContext.Provider
      value={{
        inpVal,
        setInpVaL,
        history,
        setHistory,
        currentStep,
        setCurrentStep,
        charLength,
        setCharLength,
        letters,
        setLetters,
        color,
        setColor,
        bgColor,
        setBgColor,
        themeBgColor,
        setThemeBgColor,
        themeBtnBgColor,
        setThemeBtnBgColor,
        themeBtnBgColor2,
        setThemeBtnBgColor2,
        themeBtnBgColor3,
        setThemeBtnBgColor3,
        themeBtnBgColor4,
        setThemeBtnBgColor4,
        themeBoxShadow,
        setThemeBoxShadow,
        seconds,
        setSeconds,
        upperCase,
        lowerCase,
        toglCase,
        senCase,
        copyText,
        undo,
        redo,
        handleOnChange,
        changeTheme,
        styleOftArea,
        styleOfBtns,
        styleOfMainDiv,
        styleOfThemeBtn,
        styleOfThemeBtn2,
        styleOfThemeBtn3,
        styleOfThemeBtn4,
        setAlertText,
        alertText,
        showAlert,
      }}
    >
      {children}
    </WordCountContext.Provider>
  );
}

export function useWordCount() {
  return useContext(WordCountContext);
}
