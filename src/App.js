import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </div>
  );
}

export default App;
