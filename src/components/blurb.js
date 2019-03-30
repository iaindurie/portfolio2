import React, { Component } from "react"
import theme from './../utils/variables'
import Skills from './skills'
import HeaderImage from './header-image'
import { Scrollbars } from 'react-custom-scrollbars';
import  { rhythm } from './../utils/typography';

class Blurb extends Component {
    
    render() {
        let isShown = this.props.isBlurbShown;
      return (

    <section css={{
        height: isShown ? '100vh' : '0',
        overflowY:'scroll',
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        zIndex:'2',
        transition:'all 0.35s ease-in-out',
        background:theme.colors.primary,
        display:'grid',
        gridTemplateRows:'1fr auto'}}>
        

       

        <HeaderImage />

        
          <div css={{
              width:'100%',
              height:'100%',
              display:'flex',
              '@media(max-height:730px)' : {
                paddingTop:rhythm(6),
                alignItems:'flex-start'
              },
              '@media(min-height: 731px)' : {
                alignItems: 'center',
              },
              
              overflowY:'scroll',
            justifyContent: 'center',
            padding:rhythm(1),
            color:'white',
            position:'relative',
            zIndex:'2'}}>

          <div css={{
              '@media(min-width:1000px)' : {
                margin: '0 5vw',
              }
            }}>
            <h2 css={{marginBottom:rhythm(0.5)}}>About me</h2>
            <p css={{maxWidth:'600px', marginBottom:rhythm(3)}}>I'm a UX Engineer<sup>*</sup> with skills that transcend the entire UX spectrum - from research and creation,through to implementation.
              In short, I plan, design and code things that people use.
            </p>
            <h2>What I do</h2>
            <Skills />
            </div>
           
          </div>
        
      
        <small css={{display:'block',textAlign:'right',gridRowStart:'2',fontSize:'12px',color:'white',padding:'12px'}}><sup>*</sup> Also known as UX Unicorns</small>
    </section>

  
      );
    }
  }


export default Blurb
