import React from 'react';

import './App.css';

import './fonts/inter.css';
import './fonts/tex.css';

import Homepage from './containers/Homepage';
import Instapage from './containers/Instapage';

function App() {
  return (
    <div className="App">
      <Homepage />

      <Instapage />
    </div>
  );
}

export default App;
