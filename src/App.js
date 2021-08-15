import React from "react";
import { Provider } from "react-redux";
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';
import '../node_modules/tablesorter/dist/css/theme.blue.css';
import '../node_modules/spin.js/spin.css';

import { configureStore } from './store/configure_store';
import puppeteerClose from './utils/puppeteerClose';
import CurrentMoment from './components/CurrentMoment';
import Departments from './components/Departments';
import DateRange from './components/DateRange';
import RefreshTeachersTable from './components/RefreshTeachersTable';
import TeachersTable from './components/TeachersTable';

// import TestEventsTable from './components/TestEventsTable';

const { Header, Content, Footer } = Layout;
const store = configureStore();

// Обернуто в замыкание для передачи параметра
window.onunload = () => puppeteerClose('http://localhost:3001/close');

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
            <Departments />
            <DateRange />&nbsp;
            <RefreshTeachersTable />
            <TeachersTable />
          </Provider>
          {/* <TestEventsTable /> */}
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