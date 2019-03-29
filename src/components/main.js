import React, { Component } from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography';

class Main extends Component {
    

    render() {
       
    let isShown = this.props.isBlurbShown;


      return (

    <main css={{
        minHeight:'100vh',
        transformOrigin: 'bottom',
        transform:isShown ? 'translateY(100vh)' : 'translateY(0)',
        transition:'all 0.35s ease-in-out'
        }}>
        {this.props.children}
    </main>

  
      );
    }
  }


export default Main
