import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import theme from './../utils/variables'
import Image from 'gatsby-image'
import Skills from './skills'
import { Scrollbars } from 'react-custom-scrollbars'
import  { rhythm } from './../utils/typography';

class Header extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        headerExpanded: false
      };

    }

    showHeader = () => {
      this.setState(prevState => ({
        headerExpanded: !prevState.headerExpanded
      }));
    }
    
    render() {
   
      return (


  <header css={{
      textAlign: 'center',
      marginBottom:rhythm(2),
      '@media(min-width: 1050px)' : {
        textAlign: 'left',
        position:'fixed',
        zIndex:'2',
        width:'100%'
      }
    }}>



      <h1 css={{
        cursor:'pointer',
        position:'absolute',
        top:'0',
        left:'0',
        margin: '0',
        zIndex:'2',
        '@media(max-width:899px)' : {
          fontSize:rhythm(1)
        }
      }} onClick={() => { this.showHeader() }}>

        <span css={{ display: `inline-block`,
        color: theme.colors.primary,
        position:'relative',
        '&::after' : {
          content:`''`,
          background:'white',
          position:'absolute',
          top:'0',
          bottom:'0',
          right:'0',
          left:'0',
          zIndex:'-1'
        }
        }}>Iain Durie</span>
        <span css={{ 
          fontWeight:'400',
          display: `block`,
          color: theme.colors.text,
          fontSize: rhythm(1.1),
          '@media(max-width:899px)' : {
            fontSize:rhythm(0.75)
          }
        }}>UX Engineer</span>
      </h1>
   
      <div css={{
        height: this.state.headerExpanded ? '100vh' : '0',
        overflow:'hidden',
        transition:'all 0.35s ease-in-out',
        background:theme.colors.primary}}>

        <Image css={{opacity:'0.35', position:'absolute !important', top:'0', left:'0', width:'100%', height:'100%'}} fluid={this.props.headerImage} backgroundColor={theme.colors.primary} alt="My computer" />
        

        <Scrollbars style={{ height: '100%', height: '100%' }}>
          <div css={{padding:rhythm(5),color:'white'}}>
          <div css={{maxWidth:'800px', margin:'0 auto'}}>
            <h2>About me</h2>
            <p>I'm a UX Engineer with skills that transcend the entire UX spectrum - from research and creation,through to implementation.
              In short, I plan, design and code things that people use.
            </p>
            </div>
            <h2>What I do</h2>
            <Skills />
          </div>
        </Scrollbars>
      
        
    </div>

  
  </header>
      );
    }
  }


export default Header
