import 'react-native-gesture-handler';
import React from 'react';

import './config/ReactotronConfig';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}
