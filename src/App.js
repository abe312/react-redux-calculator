import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './containers/Calculator';

import configureStore from './store';
const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Calculator />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
