import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layout';
import * as Pages from './pages';
import { Result, Search } from './components';

import './App.css';

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pages.Home />} />
        </Route>
      </Routes>
    )
  };

export default App;
