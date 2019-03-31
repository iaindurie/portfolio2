import React, { Component } from "react"
import Image from "gatsby-image"
import  { rhythm } from './../utils/typography'
import { InView } from 'react-intersection-observer'
import styles from './work-images.module.css'
import { css } from 'glamor'
import theme from "../utils/variables";

let titleIn = css({
    color: theme.colors.primary,
    //transform: 'translateX(30px)',
    '&::after' : {
        transform: 'scaleX(1) !important'
    }
})

let titleOut = css({
    color: 'white'
})


class WorkImages extends Component {
  
      render() {
          
        const images = this.props.images;
        const height = this.props.height;
        //const maxWidth = this.props.maxWidth;
     
        return (
          <div className={styles.work} css={{
            '@media(min-width:1049px)' : {
              marginTop:'-90px'
            },
            maxWidth:'1200px',
            gridColumnStart:'2',
            gridRowStart:'1'
          }}>
        
            {images.map(i => (
              <figure key={i.id} css={{
                '@media(min-width:1050px)' : {
                  
                },
                minHeight:'95vh',
                marginBottom:rhythm(7)
              }}>

                <InView triggerOnce="true">
                    {({ inView, ref }) => (
                    <figcaption css={{
                        paddingLeft:rhythm(0.5),
                        textAlign:'center',
                        zIndex:'-1',
                        position: 'relative'
                    }}>
                        
                        <h3 ref={ref} className={inView ? titleIn : titleOut} css={{
                            fontSize:rhythm(0.5),
                            fontStyle:'italic',
                            padding:rhythm(0.25),
                            paddingLeft:rhythm(1),
                            position:'relative',
                            display:'inline-block',
                            transition: 'all 0.25s 1.25s ease-in-out',
                            '&::after' : {
                                position:'absolute',
                                transformOrigin:'center left',
                                content:`''`,
                                top:'0',
                                left:'0',
                                right:'30px',
                                bottom:'0',
                                transform: 'scaleX(0)',
                                zIndex:'-1',
                                background:theme.colors.strip,
                                transition: 'all 0.25s 1s ease-in-out'
                            }
                        }}>
                        <svg className={inView ? styles.down : styles.up} css={{
                          position:'absolute',
                          bottom:'10px',
                          left:'-13px',
                          fill:theme.colors.text,
                          stroke: theme.colors.text,
                        strokeDashoffset: '1000',
                        strokeDasharray:'1000'}} height="195" width="30" x="0px" y="0px" viewBox="0 0 40 260">
                        <g transform="translate(0,-952.36218)">
                        <path d="M19,1206.05l-15.31-14.41c-0.38-0.36-1.06-0.34-1.42,0.05c-0.36,0.38-0.37,1,0.05,1.42l17,16c0.47,0.38,1.04,0.28,1.38,0h0
                          l17-16c0.4-0.39,0.41-1.05,0.05-1.42c-0.37-0.38-1.04-0.41-1.42-0.05L21,1206.05"/>
                      </g>
                        <line className={styles.path} stroke-width="2" stroke-linecap="round" stroke-miter-limit="10" x1="20" y1="256" x2="20" y2="5"/>

                        </svg>
                        {i.headline}</h3>
                    </figcaption>
                    )}
                </InView>
       
    {height === 'full' ?
    <div css={{
        display:'block',
        // cursor:'zoom-in',
        height:'95vh',
            '> .gatsby-image-wrapper':{
              height:'100%'
            },
            '& img' : {
              objectFit: 'contain !important'
            },
        '@media(min-width:1050px)' : {
            paddingLeft:rhythm(2),
            paddingRight:rhythm(2),
            //maxWidth:this.props.mainPic.childImageSharp.fluid.presentationWidth,
            flex:'1',
            
        }}}>
        <Image fluid={i.img.childImageSharp.fluid} alt={i.alt} />
    </div> :
    <div css={{
        display:'block',
        cursor:'zoom-in',
        }}>
        <Image fluid={i.img.childImageSharp.fluid} alt={i.alt} />
    </div>
    }
                   
             
              </figure>
            ))}
          </div>
        );
      }
    }

export default WorkImages


