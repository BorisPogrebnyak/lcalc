import React from "react";
import { Provider } from "react-redux";
import { Layout } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';
import '../node_modules/tablesorter/dist/css/theme.blue.css';
import '../node_modules/spin.js/spin.css';

import { configureStore } from './store/configure_store';
import CurrentMoment from './components/CurrentMoment';
import DepartmentsContainer from './components/DepartmentsContainer';
import DateRangeContainer from './components/DateRangeContainer';
import RefreshTeachersTableContainer from './components/RefreshTeachersTableContainer';
import TeachersTableContainer from './components/TeachersTableContainer';

const { Header, Content, Footer } = Layout;
const store = configureStore();

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
            <DepartmentsContainer />
            <DateRangeContainer />&nbsp;
            <RefreshTeachersTableContainer />
            <TeachersTableContainer />
          </Provider>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Roga&Kopyta ©2021 Created by Ostap Bender</Footer>
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
};