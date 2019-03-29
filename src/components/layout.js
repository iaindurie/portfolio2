import React, { Component } from "react"
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import Headroom from 'react-headroom'
import Blurb from './blurb'
import Header from './header'
import Footer from './footer'
import Main from './main'
import "./layout.css";




class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blurbShown: false,
      aboutClicked: false
    };

    this.switchBlurb = this.switchBlurb.bind(this);
  }

  switchBlurb() {
    this.setState(prevState => ({
      blurbShown: !prevState.blurbShown,
      aboutClicked: !prevState.aboutClicked
    }));
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.blurbShown !== nextState.blurbShown) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
    
  render() {
    return (
      <div>
        <Headroom>
          <Header onClick={this.switchBlurb} isAboutClicked={this.state.aboutClicked} />
        </Headroom>

        <Blurb isBlurbShown={this.state.blurbShown} />

        <Main isBlurbShown={this.state.blurbShown}>
          {this.props.children}
        </Main>

        <ScrollLock isActive={this.state.blurbShown} />

        <Footer />
      </div>
    )
  }
}
  
export default Layout


