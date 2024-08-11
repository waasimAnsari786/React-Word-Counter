import { useWordCount } from "./WordCountContext";

export function API() {
  const {
    upperCase,
    lowerCase,
    senCase,
    toglCase,
    redo,
    undo,
    copyText,
    changeTheme,
    setThemeBtnBgColor,
    setThemeBtnBgColor2,
    setThemeBtnBgColor3,
    setThemeBtnBgColor4,
    styleOfThemeBtn,
    styleOfThemeBtn2,
    styleOfThemeBtn3,
    styleOfThemeBtn4,
    showAlert,
  } = useWordCount();
  return [
    [
      {
        text: "uppercase",
        func: upperCase,
        showAlert: () => showAlert("Text converted into uppercase"),
      },
      {
        text: "lowercase",
        func: lowerCase,
        showAlert: () => showAlert("Text converted into lowercase"),
      },
      {
        text: "sentence case",
        func: senCase,
        showAlert: () => showAlert("Text converted into sentence case"),
      },
      {
        text: "toggle case",
        func: toglCase,
        showAlert: () => showAlert("Text converted into toggle case"),
      },
      {
        text: "undo",
        func: undo,
        showAlert: () => showAlert("You did undo your text"),
      },
      {
        text: "redo",
        func: redo,
        showAlert: () => showAlert("You did redo your text"),
      },
      {
        text: "copy text",
        func: copyText,
        showAlert: () => showAlert("Text copied to clipboard"),
      },
    ],
    [
      {
        text: "theme 1",
        func: changeTheme,
        param1: "white  ",
        param2: "#550b0b",
        param3: "#420000",
        param4: "#bd5959",
        setBtnFunc: () => setThemeBtnBgColor("#550b0b"),
        themBtnObj: styleOfThemeBtn,
      },
      {
        text: "theme 2",
        func: changeTheme,
        param1: "white  ",
        param2: "#180f68",
        param3: "#0a0252",
        param4: "#6995e9",
        setBtnFunc: () => setThemeBtnBgColor2("#180f68"),
        themBtnObj: styleOfThemeBtn2,
      },
      {
        text: "theme 3",
        func: changeTheme,
        param1: "white  ",
        param2: "#124728",
        param3: "#003516",
        param4: "#5fbd86",
        setBtnFunc: () => setThemeBtnBgColor3("#124728"),
        themBtnObj: styleOfThemeBtn3,
      },
      {
        text: "theme 4",
        func: changeTheme,
        param1: "",
        param2: "",
        param3: "",
        param4: "#6995e9",
        setBtnFunc: () => setThemeBtnBgColor4("#1717d1"),
        themBtnObj: styleOfThemeBtn4,
      },
    ],
  ];
}
