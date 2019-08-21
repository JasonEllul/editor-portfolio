import React, { Component } from 'react';

import InstagramEmbed from 'react-instagram-embed';

import './Instapage.css';

class Instapage extends Component {

  constructor(props) {
    super(props);
    this.instagramUrls = ['https://instagr.am/p/BzZkd3BlDnM/', ''];
  }

  componentDidMount() {

  }




  render() {
    return (
      <div className='instapage-wrapper' style={{ backgroundColor: '#fafafa' }}>
        <div className='instapage-showcase-wrapper'>
          <h1 className='instapage-title'>RECENT FOOTBALL EDITS</h1>
          <div className='instapage-showcase'>
            <div className='embed-wrapper'>
              <InstagramEmbed
                url='https://www.instagram.com/p/BwF_LHHF4lP/'
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
            </div>
            <div className='embed-wrapper'>
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
            </div>
            <div className='embed-wrapper'>
              <InstagramEmbed
                url='https://www.instagram.com/p/B0rwmBRgvjI/'
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
            </div>
            <div className='embed-wrapper'>
              <InstagramEmbed
                url='https://www.instagram.com/p/B0TkaAaBLj4/'
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
            </div>
          </div>
        </div>
        <div className='instapage-row-text-wrapper'>
          <p className='instapage-row-title'>Von Miller</p>
          <p className='instapage-row-text'>Show transparent background picture of player under the instragram embed on the right. The rest of the screen looks like Profilepage on personal portfolio.</p>
        </div>
      </div>
    )
  }
}

export default Instapage;
