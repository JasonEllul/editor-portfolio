import React from 'react';

import './App.css';

import './fonts/inter.css';
import './fonts/tex.css';

import Homepage from './containers/Homepage';
import Instapage from './containers/Instapage';
import Contactpage from './containers/Contactpage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Instapage />
      <Contactpage />
    </div>
  );
}

export default App;
