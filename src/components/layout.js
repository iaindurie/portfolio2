import React, { Component } from "react"
import Blurb from './blurb'
import Header from './header'
import Footer from './footer'
import "./layout.css"




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

    
  render() {
    return (
      <div>
        <Header onClick={this.switchBlurb} isAboutClicked={this.state.aboutClicked} />

        <Blurb isBlurbShown={this.state.blurbShown} />

        <main css={{minHeight:'100vh'}}>
          {this.props.children}
        </main>

        <Footer />
      </div>
    )
  }
}
  
export default Layout


