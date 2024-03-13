import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ListPage from './ListPage';

import './App.scss';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/Dashboard" element={<Dashboard favorites={favorites} setFavorites={setFavorites} />} />
      <Route path="/list" element={<ListPage favorites={favorites} setFavorites={setFavorites} />} />
    </Routes>
  </Router>

    /* <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" render={() => <Dashboard favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/list" render={() => <ListPage favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </div>
    </Router> */
  );
}

export default App;