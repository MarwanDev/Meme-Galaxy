/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components';

const App = () => {
  return (
    <Router>
      <main>
        <Layout />
      </main>
    </Router>
  );
};

export default App;
