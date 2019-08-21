import React, { Component } from 'react';

import logo from '../media/newlogo.png';

import './Header.css';
import '../fonts/inter.css';

const headerStyle = { width: '190px', transform: 'none', top: 10, left: 20, filter: 'drop-shadow(0 0 2.5rem #4895ff)' }

class Homepage extends Component {

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
      <div className='navbar-wrapper' style={{ opacity: logoHidden ? 1 : 0, background: scroll ? '#0C192A' : 'linear-gradient(#0C192A, transparent)' }}>
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

export default Homepage;
