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
      justifyContent:'center'
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


      <div css={{
        position:'relative',
        cursor:'pointer',
        '&::after' : {
          position: 'absolute',
          left:'0',
          top:'0',
          bottom:'0',
          right:'0',
          content:`''`,
          background:'white',
          zIndex:'-1',
          transform: 'scaleY(0)',
          transition: 'all 0.35s 0.15s cubic-bezier(0.86, 0, 0.07, 1)',
          transformOrigin:'top left'
        },
        ':hover' : {
          '&::after' : {
            transform: 'scaleY(1)'
          }
        }
      }}>
        <h1 css={{
          background:'white',
          display:'inline-block',
          marginBottom:rhythm(0.25),
          color: theme.colors.primary,
          padding:rhythm(0.2) + ' ' + rhythm(0.5),
          fontSize:rhythm(1.1)
        }}>{props.title}</h1>

        <h2 css={{
          fontSize:rhythm(0.85),
          paddingLeft:rhythm(0.5),
          marginBottom: rhythm(0.2)
        }}>{props.type}</h2>

        {props.children}

      </div>
  </article>
)

export default WorkItem