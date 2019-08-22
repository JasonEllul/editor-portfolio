import React, { Component } from 'react';

import InstagramEmbed from 'react-instagram-embed';

import SocialsWidget from '../components/SocialsWidget';

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
      <div className='instapage-wrapper'>
        <SocialsWidget />
        <div className='instapage-showcase-wrapper'>
          <div className='instapage-showcase'>
            <p className='instapage-title'>RECENT VIDEO EDITS</p>
            <div className='embed-container'>
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
                />
              </div>
              <div className='embed-wrapper'>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B0rwmBRgvjI/'
                  maxWidth={320}
                />
              </div>
              <div className='embed-wrapper'>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B0TkaAaBLj4/'
                  maxWidth={320}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='instapage-showcase-wrapper'>
          <div className='instapage-showcase'>
            <h1 className='instapage-title'>RECENT ANIMATIONS</h1>
            <div className='embed-container'>
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
                />
              </div>
              <div className='embed-wrapper'>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B0rwmBRgvjI/'
                  maxWidth={320}
                  hideCaption={false}
                />
              </div>
              <div className='embed-wrapper'>
                <InstagramEmbed
                  url='https://www.instagram.com/p/B0TkaAaBLj4/'
                  maxWidth={320}
                  hideCaption={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Instapage;
