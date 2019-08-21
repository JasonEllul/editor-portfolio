import React, { Component } from 'react';

import logo from '../media/newlogo.png';

import './Header.css';
import '../fonts/inter.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { scroll: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  animateIn() {
    setTimeout(() => {
      this.setState({ flickered: true });

    }, 1000);
  }


  handleScroll(e) {
    // If offset is in component
    if (!this.state.scroll && window.scrollY > 0) {
      this.setState({ scroll: true });
    } else if (this.state.scroll && window.scrollY <= 0) {
      this.setState({ scroll: false })
    }
  }

  render() {
    const { scroll } = this.state;
    const { logoHidden } = this.props
    return (
      <div className='navbar-wrapper' style={{
        opacity: logoHidden ? 1 : 0,
        backgroundColor: scroll ? '#0C192A' : 'transparent',
        boxShadow: scroll ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : 'none'
      }}>
        <img className='navbar-brand' src={logo} />
        <div className='navbar-list'>
          <div className='navbar-item'>
            <p>Home</p>
          </div>
          <div className='navbar-item'>
            <p>Portfolio</p>
          </div>
          <div className='navbar-item'>
            <p>Contact</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
