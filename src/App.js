import React from "react";
import { GlobalStyle } from "./globalCSS";
import { Board } from "./board/Board";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Board />
    </div>
  );
}

export default App;
