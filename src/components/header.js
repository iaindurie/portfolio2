import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography';
import { ScrollbarContext } from "react-scrollbars-custom";



class Header extends Component {
  constructor(props) {
    super(props);

    this.switchBlurb = this.switchBlurb.bind(this);
  }

  switchBlurb(e) {
    e.preventDefault();
    this.props.onClick();
  }
    
    render() {
   
      let isClicked = this.props.isAboutClicked;

    if(isClicked) {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }

      return (


  <header css={{
      textAlign: 'center',
      marginBottom:rhythm(2),
      display:'flex',
      padding:rhythm(1),
      justifyContent:'space-between',
      alignItems:'flex-start',
      '@media(min-width: 1050px)' : {
        textAlign: 'left',
        position:'fixed',
        zIndex:'3',
        width:'100%'
      }
    }}>

      <h1 css={{
        margin: '0',
        zIndex:'2',
        display:'inline-block',
        position: 'relative',
        //background:'white',
        '&::after' : {
          position:'absolute',
          left:'-5px',
          right:'-5px',
          top:'0',
          bottom:'0',
          background:'white',
          content:`''`,
          zIndex:'-1'
        },
        '@media(max-width:899px)' : {
          fontSize:rhythm(1)
        }
      }}>

        <span css={{
          display: `inline-block`,
          color: theme.colors.primary,
          position:'relative',
        }}>Iain Durie</span>
      </h1>

      <a href="#" onClick={this.switchBlurb}
      css={{textDecoration:'none',
      display:'inline-block',
      color: theme.colors.primary,
      position: 'relative',
      '&:hover::after' : {
        transform:'scaleX(1)'
      },
      '&::after' : {
        position:'absolute',
        left:'-5px',
        right:'-5px',
        top:'0',
        bottom:'0',
        background:theme.colors.strip,
        content:`''`,
        zIndex:'-1',
        transform:isClicked === true ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'right center',
        transition:'all 0.35s'
      }
      }}>{!isClicked && 
      <span css={{verticalAlign:'middle',display:'inline-block',}}>About me</span>
      }
      {isClicked &&
      <svg css={{verticalAlign:'middle',display:'inline-block',fill:theme.colors.primary}} viewBox="0 0 117.98 117.97" x="0" y="0" width="16" height="16">
      <path d="M158,153.15,104.83,100,158,46.85A3.42,3.42,0,0,0,153.15,42L100,95.17,46.84,42A3.42,3.42,0,1,0,42,46.85L95.16,100,42,153.15A3.42,3.42,0,0,0,46.85,158L100,104.84,153.16,158a3.42,3.42,0,0,0,4.83-4.83Z"
      transform="translate(-41.01 -41.02)"/></svg>
      }
      
      </a>

  
  </header>
      );
    }
  }


export default Header
