import React, { Component } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import  { rhythm } from './../utils/typography'
import { InView } from 'react-intersection-observer'
import styles from './work-images.module.css'
import { css } from 'glamor'
import theme from "../utils/variables";

let titleIn = css({
    color: theme.colors.primary,
    transform: 'translateX(30px)',
    '&::after' : {
        transform: 'scaleX(1) !important'
    }
})

let titleOut = css({
    color: 'white'
})


class WorkImages extends Component {
    constructor(props) {
        super(props);
    
      }
      
      render() {
          
        const images = this.props.images;
        const height = this.props.height;
        const maxWidth = this.props.maxWidth;
     
        return (
          <div css={{
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
                        paddingLeft:rhythm(0.5)
                    }}>
                        {/* <svg>arrow animation to go here</svg> */}
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
                        }}>{i.headline}</h3>
                    </figcaption>
                    )}
                </InView>
          
          {console.log(height)}
    {height === 'full' ?
    <Link to="/" target="_blank" css={{
        textDecoration:'none',
        display:'block',
        cursor:'zoom-in',
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
    </Link> :
    <Link to="/" target="_blank" css={{
        textDecoration:'none',
        display:'block',
        cursor:'zoom-in',
        }}>
        <Image fluid={i.img.childImageSharp.fluid} alt={i.alt} />
    </Link>
    }
                   
             
              </figure>
            ))}
          </div>
        );
      }
    }

export default WorkImages


