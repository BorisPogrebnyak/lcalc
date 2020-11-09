import React from "react";

import "./styles.css";

import { CurrentDateTime } from "./components/CurrentDateTime";

export default function App() {
  return (
    <div className="App">
      <CurrentDateTime />
      <h1>Выполнение аудиторных поручений</h1>
    </div>
  );
}
