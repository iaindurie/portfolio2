import { Link } from "gatsby"
import React, { Component } from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography';



class Header extends Component {
  constructor(props) {
    super(props);

    this.switchBlurb = this.switchBlurb.bind(this);
  }

  switchBlurb() {
    this.props.onClick();
  }
    
    render() {
   
      let isClicked = this.props.isAboutClicked;

      if (typeof document !== 'undefined') {
    if(isClicked) {
      document.documentElement.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('hidden');
    }
  }

      return (


  <header css={{
      marginBottom:rhythm(2),
      //background:'rgba(255,255,255,0.75)',
      display:'flex',
      padding:rhythm(1),
      justifyContent:'space-between',
      alignItems:'flex-start',
      //position:'fixed',
      zIndex:'3',
      width:'100%'
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
          zIndex:'-1',
          transition: 'all 0.25s',
        boxShadow: isClicked ? '0px 0px 0px 8px rgba(255,255,255,0)' : '0px 0px 0px 8px rgba(255,255,255,0.5)',
        },
        '@media(max-width:899px)' : {
          fontSize:rhythm(1)
        }
      }}>

        <Link to="/" css={{
          display: `inline-block`,
          color: theme.colors.primary,
          position:'relative',
          textDecoration:'none'
        }}>Iain Durie</Link>
      </h1>

      <span onClick={this.switchBlurb} aria-role="button" css={{
        cursor:'pointer',
        display:'inline-block',
        color: theme.colors.primary,
        position: 'relative',
        '&:hover::after' : {
          transform:'scaleX(1)'
        },
      '&::after' : {
        position:'absolute',
        left:'-5px',
        width: isClicked ? '26px' : 'calc(100% + 10px)',
        top:'0',
        bottom:'0',
        background:theme.colors.strip,
        content:`''`,
        zIndex:'-1',
        transform: isClicked ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'right center',
        transition:'all 0.35s'
      },
      '&::before' : {
        position:'absolute',
        left:'-5px',
        width: '100%',
        top:'0',
        bottom:'0',
        background:'white',
        transition: 'all 0.25s',
        boxShadow: isClicked ? '0px 0px 0px 8px rgba(255,255,255,0)' : '0px 0px 0px 8px rgba(255,255,255,0.5)',
        content:`''`,
        zIndex:'-2',
        
      }
      }}>
      {!isClicked && 
      <span css={{verticalAlign:'middle',display:'inline-block',}}>About me</span>
      }
      {isClicked &&
      <svg css={{verticalAlign:'middle',display:'inline-block',fill:theme.colors.primary}} viewBox="0 0 117.98 117.97" x="0" y="0" width="16" height="16">
      <path d="M158,153.15,104.83,100,158,46.85A3.42,3.42,0,0,0,153.15,42L100,95.17,46.84,42A3.42,3.42,0,1,0,42,46.85L95.16,100,42,153.15A3.42,3.42,0,0,0,46.85,158L100,104.84,153.16,158a3.42,3.42,0,0,0,4.83-4.83Z"
      transform="translate(-41.01 -41.02)"/></svg>
      }
      
      </span>

  
  </header>
      );
    }
  }


export default Header
