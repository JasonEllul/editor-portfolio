import React, { Component } from 'react';

import Header from '../components/Header';

import logo from '../media/newlogo.png';

import ig from '../media/ig.png';
import twitter from '../media/twitter.png';
import email from '../media/email.png';

import tecca from '../media/tecca.mov';
import logoVideo from '../media/output.mov';

import './Homepage.css';

const headerStyle = { width: '190px', transform: 'none', top: 10, left: 20, filter: 'drop-shadow(0 0 2.5rem #4895ff)' }

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { flickered: false, logoHidden: false };
  }

  componentDidMount() {

  }

  animateIn() {
    setTimeout(() => {
      this.setState({ flickered: true }, () => {
        setTimeout(() => {
          this.setState({ logoHidden: true });
        }, 2000);
      });

    }, 1000);
  }

  render() {
    const { flickered, logoHidden } = this.state;
    return (
      <div className='homepage-wrapper'>
        {/* Becomes a part of navbar after animation */}
        {/* <img className='logo' src={logo} style={flickered ? headerStyle : null} /> */}

        <Header logoHidden />

        <div className='video-bg' style={{ opacity: flickered ? 0.8 : 0 }}>
          <video muted autoPlay playsInline loop onLoadedData={() => this.animateIn()}>
            <source src={tecca} type="video/mp4" />
          </video>
        </div>
        <div className='socials-wrapper' style={{ opacity: flickered ? 1 : 0 }}>
          <p className='socials-title'>GLOWING EDITS AND ANIMATIONS</p>
          <div className='socials-row'>
            <img className='socials-icon' src={ig} /><p className='socials-text'>HIGHLIGHTONHIGHLIGHTS</p>
          </div>
          <div className='socials-row'>
            <img className='socials-icon' src={twitter} /><p className='socials-text'>HLonHLs</p>
          </div>
        </div>

        {/* <video className='logo' muted autoPlay loop style={flickered ? headerStyle : null}>
          <source src={logoVideo} type="video/mp4" />
        </video> */}
      </div>
    )
  }
}

export default Homepage;
