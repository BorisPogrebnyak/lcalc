import React from "react";
import "./styles.css";

import { CurrentDate } from "./components/CurrentDate";
import { CurrentTime } from "./components/CurrentTime";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CurrentDate className="App-current-date" />
      <CurrentTime className="App-current-time" />
    </div>
  );
}
