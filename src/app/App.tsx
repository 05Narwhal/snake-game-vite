import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import TitleScreen from './pages/title screen/_gui';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleScreen />} />
      </Routes>
    </Router>
  )
}

export default App
