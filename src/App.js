import React from "react";
import { Provider } from "react-redux";
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';
import '../node_modules/tablesorter/dist/css/theme.blue.css';
import '../node_modules/spin.js/spin.css';

import { configureStore } from './store/configure_store';
import puppeteerClose from './services/puppeteerClose';
import CurrentMoment from './components/CurrentMoment';
// import DepartmentsContainer from './components/DepartmentsContainer';
import Departments from './components/Departments';
import DateRangeContainer from './components/DateRangeContainer';
import DateRange from './components/DateRange';
import RefreshTeachersTableContainer from './components/RefreshTeachersTableContainer';
import RefreshTeachersTable from './components/RefreshTeachersTable';
// import TeachersTableContainer from './components/TeachersTableContainer';
import TeachersTable from './components/TeachersTable';

const { Header, Content, Footer } = Layout;
const store = configureStore();

// Передать url как параметр handler????????
// window.onunload = () => puppeteerClose();
window.onunload = puppeteerClose;

export default function App() {
  return (
    <div className='App'>
      <Layout style={styles.layoutStyle}>
        <Header style={styles.layoutHeaderStyle}>
          <CurrentMoment />
        </Header>
        <Content>
          <h1>Выполнение аудиторных поручений</h1>
          <Provider store={store}>
            {/* <DepartmentsContainer /> */}
            <Departments />
            {/* <DateRangeContainer />&nbsp; */}
            <DateRange />&nbsp;
            {/* <RefreshTeachersTableContainer /> */}
            <RefreshTeachersTable />
            {/* <TeachersTableContainer /> */}
            <TeachersTable />
          </Provider>
        </Content>
        <Footer style={styles.layoutFooterStyle}>Roga&Kopyta ©2021 Created by Ostap Bender</Footer>
      </Layout>
    </div>
  );
}

const styles = {
  layoutStyle: {
    minHeight: '100vh',
  },

  layoutHeaderStyle: {
    background: '#f0f2f5',
  },

  layoutFooterStyle: {
    textAlign: 'center'
  },
};