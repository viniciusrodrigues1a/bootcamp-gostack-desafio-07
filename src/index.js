import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </>
  );
}
