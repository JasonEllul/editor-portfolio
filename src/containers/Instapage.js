import React, { Component } from 'react';

import InstagramEmbed from 'react-instagram-embed';

import './Instapage.css';

class Instapage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className='instapage-wrapper' style={{ backgroundColor: '#ffffff' }}>
        <h1 className='instapage-title'>MY PORTFOLIO</h1>
        <div className='instapage-row'>
          <InstagramEmbed
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
          />
          <div className='instapage-row-text-wrapper'>
            <p className='instapage-row-title'>Von Miller</p>
            <p className='instapage-row-text'>All generated information from the Internet, books, encyclopedia, etc., you can generate many random lists to meet your use. All the lists are random, so each time the results are not the same. The generators contain addresses, animals, music, creatures, celebrities, sports, geography, food, architecture and so on.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Instapage;
