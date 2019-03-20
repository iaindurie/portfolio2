import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const WorkItem = (props) => (
  
  <article css={{
      height:'95vh',
      alignItems:'center',
      display:'flex',
      justifyContent:'center',
      marginBottom:rhythm(5)
    }}>

      <div css={{
        paddingLeft:rhythm(2),
        paddingRight:rhythm(2),
        maxWidth:props.mainPic.childImageSharp.fluid.presentationWidth,
        flex:'1',
        height:'100%',
        '> .gatsby-image-wrapper':{
          height:'100%'
        },
        '& img' : {
          objectFit: 'contain !important'
        }
      }}>
        {props.mainPic &&
          <Image fluid={props.mainPic.childImageSharp.fluid} alt={props.alt} />
        }
      </div>


      <Link to="ringtons" css={{
          textDecoration:'none',
          display:'flex',
          flexDirection:'column',
          color:theme.colors.text,
          alignItems:'flex-start',
          ':hover h2' : {
            '&::after' : {
                transform: 'scaleX(1.15)'
            },
            '& svg' : {
                opacity:'1',
                transform: 'translateY(-50%) translateX(25px)',
            }
            }
        }}>

        <h1 css={{
          background:'white',
          display:'inline-block',
          color: theme.colors.primary,
          padding:rhythm(0.2) + ' ' + rhythm(0.5),
          fontSize:rhythm(1.1),
          marginBottom:'0'
        }}>{props.title}</h1>

        <h2 css={{
          fontSize:rhythm(0.85),
          paddingLeft:rhythm(0.5),
          marginBottom: rhythm(0.2),
          paddingBottom:'5px',
          position:'relative',
          display:'inline-block',
            '&::after' : {
                position: 'absolute',
                left:'0',
                top:'0',
                bottom:'0',
                right:'0',
                content:`''`,
                background:'white',
                zIndex:'-1',
                transform: 'scaleX(0)',
                transition: 'all 0.35s 0.15s cubic-bezier(0.86, 0, 0.07, 1)',
                transformOrigin:'top left'
            }
        }}>{props.type}

        <svg css={{
            fill: theme.colors.primary,
            position:'absolute',
            right:'-20px',
            opacity:'0',
            transition: 'all 0.35s 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            top:'50%',
            transform: 'translateY(-50%)',
        }} aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="40" height="40">
        <g transform="translate(0,-952.36218)">
        <path d="m 87.750716,1001.6724 -16.0001,-16.99995 c -0.3873,-0.4042 -1.0492,-0.4071 -1.4221,-0.047 -0.379,0.3659 -0.4068,1.0376 -0.047,1.4221 l 14.4063,15.31245 -71.68766,0 c -0.5523,0 -1,0.4477 -1,1 0,0.5523 0.4477,1 1,1 l 71.68766,0 -14.4063,15.3125 c -0.3601,0.3845 -0.3379,1.0621 0.047,1.4221 0.3846,0.36 1.0035,0.3689 1.4221,-0.047 l 16.0001,-17 c 0.3803,-0.468 0.2803,-1.0416 0,-1.3752 z"></path></g></svg>
        </h2>

        {props.children}

      </Link>
  </article>
)

export default WorkItem


