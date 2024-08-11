import "./App.css";
import WordCount2 from "./components/WordCount2.jsx";
import { WordCountProvider } from "./components/WordCountContext.jsx";

function App() {
  return (
    <WordCountProvider>
      <WordCount2 />
    </WordCountProvider>
  );
}

export default App;
