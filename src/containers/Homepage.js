import React, { Component } from 'react';

import logo from '../media/newlogo.png';

import ig from '../media/ig.png';
import twitter from '../media/twitter.png';
import email from '../media/email.png';

import tecca from '../media/tecca.mov';
import logoVideo from '../media/output.mov';

import '../css/Homepage.css';


const headerStyle = { width: '190px', transform: 'none', top: 10, left: 20, filter: 'drop-shadow(0 0 2.5rem #4895ff)' }

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = { flickered: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ flickered: true });

    }, 2000);
  }

  render() {
    const { flickered } = this.state;
    return (
      <div className='page-wrapper'>
        <div className='video-bg' style={{ opacity: flickered ? 0.8 : 0 }}>
          <video muted autoPlay loop>
            <source src={tecca} type="video/mp4" />
          </video>
        </div>
        <div className='header-wrapper' style={{ opacity: flickered ? 1 : 0 }}>

        </div>
        <div className='home-footer-wrapper' style={{ opacity: flickered ? 1 : 0 }} />
        <div className='socials-wrapper' style={{ opacity: flickered ? 1 : 0 }}>
          <p className='socials-title'>glowing animations and edits</p>
          <div className='socials-row'>
            <img className='socials-icon' src={ig} /><p className='socials-text'>highlightonhighlights</p>
          </div>
          <div className='socials-row'>
            <img className='socials-icon' src={twitter} /><p className='socials-text'>HLonHLs</p>
          </div>
        </div>

        <img className='logo' src={logo} style={flickered ? headerStyle : null} />
        {/* <video className='logo' muted autoPlay loop style={flickered ? headerStyle : null}>
          <source src={logoVideo} type="video/mp4" />
        </video> */}
      </div>
    )
  }
}

export default Homepage;
