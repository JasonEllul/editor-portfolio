import React, { Component } from 'react';

import './SocialsWidget.css';

import ig from '../media/igblack.png';
import twitter from '../media/twitterblack.png';

class SocialsWidget extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    // If offset is past homepage
    if (!this.state.visible && (window.scrollY > window.innerHeight / 2)) {
      this.setState({ visible: true });
    } else if (this.state.visible && (window.scrollY <= window.innerHeight / 2)) {
      this.setState({ visible: false });
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <div className='widget-wrapper' style={{ left: visible ? '-1px' : '-5vw' }}>
        <img className='widget-icon' src={ig} />
        <div className='widget-divider' />
        <img className='widget-icon' src={twitter} />
      </div>
    )
  }
}

export default SocialsWidget;
