import React from 'react';

import InstagramEmbed from 'react-instagram-embed';

import './App.css';

import Homepage from './containers/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <InstagramEmbed
        url='https://instagr.am/p/BzZkd3BlDnM/'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      /> */}
      <div className='page-wrapper' style={{ zIndex: 1, backgroundColor: 'green' }} />
    </div>
  );
}

export default App;
