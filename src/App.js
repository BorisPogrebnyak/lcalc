import React from "react";
import { Provider } from "react-redux";

import "./styles.css";

import { configureStore } from "./store/configure_store";
import { CurrentMoment } from "./components/CurrentMoment";
// import GetCsrfTokenContainer from "./components/GetCsrfTokenContainer";
import DepartmentsContainer from "./components/DepartmentsContainer";
import DateRangeContainer from "./components/DateRangeContainer";
import RefreshTeachersTableContainer from "./components/RefreshTeachersTableContainer";
import TeachersTableContainer from "./components/TeachersTableContainer";

const store = configureStore();

export default function App() {
  return (
    <div className="App">
      <CurrentMoment />
      <h1>Выполнение аудиторных поручений</h1>
      <Provider store={store}>
        {/* <GetCsrfTokenContainer /> */}
        <DepartmentsContainer />
        <DateRangeContainer />&nbsp;
        <RefreshTeachersTableContainer />
        <TeachersTableContainer />
      </Provider>
    </div>
  );
}
