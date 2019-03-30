import React, { Component } from "react"
import Headroom from 'react-headroom'
import Blurb from './blurb'
import Header from './header'
import Footer from './footer'
import Main from './main'
//import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
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

  targetRef = React.createRef();
  targetElement = null;

  componentDidMount() {
    // 3. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav). 
    this.targetElement = this.targetRef.current; 
  }

  
  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor 
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  switchBlurb() {
    this.setState(prevState => ({
      blurbShown: !prevState.blurbShown,
      aboutClicked: !prevState.aboutClicked
    }));

    
  }

  componentDidMount() {
    if(this.state.blurbShown) {
      disableBodyScroll(this.targetElement);
    } else {
      enableBodyScroll(this.targetElement);
    }
  }
    
  render() {
    return (
      <div>

        <Headroom>
          <Header onClick={this.switchBlurb} isAboutClicked={this.state.aboutClicked} />
        </Headroom>

        <Blurb isBlurbShown={this.state.blurbShown} ref={this.targetElement} />

        <Main isBlurbShown={this.state.blurbShown}>
          {this.props.children}
        </Main>

        

        <Footer />
      </div>
    )
  }
}
  
export default Layout


