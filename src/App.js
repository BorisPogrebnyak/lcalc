import React from "react";
import { Provider } from "react-redux";

import "./styles.css";

import { CurrentDateTime } from "./components/CurrentDateTime";
import { configureStore } from "./store/configure_store";
import DepartmentsContainer from "./components/DepartmentsContainer";

const store = configureStore();

export default function App() {
  return (
    <div className="App">
      <CurrentDateTime />
      <h1>Выполнение аудиторных поручений</h1>
      <Provider store={store}>
        <DepartmentsContainer />
      </Provider>,
    </div>
  );
}
