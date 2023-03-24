import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';

function App(props) {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
