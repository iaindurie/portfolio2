import React, { Component } from "react"
import theme from './../utils/variables'
import Image from 'gatsby-image'
import Skills from './skills'
import { Scrollbars } from 'react-custom-scrollbars'
import HeaderImage from './header-image'
import  { rhythm } from './../utils/typography';

class Blurb extends Component {
    
    render() {
        let isShown = this.props.isBlurbShown;
      return (

    <section css={{
        height: isShown ? '100vh' : '0',
        overflow:'hidden',
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        zIndex:'2',
        transition:'all 0.35s ease-in-out',
        background:theme.colors.primary}}>
        
        <HeaderImage />

      
          <div css={{
              width:'100%',
              height:'100%',
              display:'flex',
              '@media(max-height:659px)' : {
                paddingTop:rhythm(4)
              },
              '@media(min-height: 660px)' : {
                alignItems: 'center',
              },
              
              overflowY:'scroll',
            justifyContent: 'center',
            padding:rhythm(2),
            color:'white',
            position:'relative',
            zIndex:'2'}}>

          <div css={{
              margin: '0 5vw'
            }}>
            <h2 css={{marginBottom:rhythm(0.5)}}>About me</h2>
            <p css={{maxWidth:'600px', marginBottom:rhythm(3)}}>I'm a UX Engineer<sup>*</sup> with skills that transcend the entire UX spectrum - from research and creation,through to implementation.
              In short, I plan, design and code things that people use.
            </p>
            <h2>What I do</h2>
            <Skills />
            </div>
           
          </div>
        
      
        <small css={{fontSize:'11px',color:'white',position:'absolute', bottom:'10px', right:'12px'}}><sup>*</sup> Also known as UX Unicorns</small>
    </section>

  
      );
    }
  }


export default Blurb
