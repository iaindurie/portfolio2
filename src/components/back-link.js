import React from "react"
import styles from "./contact-link.module.css"
import theme from './../utils/variables'
import { Link } from 'gatsby'
import  { rhythm } from './../utils/typography'

const ContactLink = (props) => {

    return(
        <Link to="/" css={{
            width:'70px',
            lineHeight:'50px',
            position:'relative',
            top:rhythm(1),
            marginLeft:rhythm(1.25),
            zIndex:'3',
            textDecoration:'none',
            display:'inline-block',
              '&::after' : {
                  position: 'absolute',
                  left:'15px',
                  top:'0',
                  bottom:'0',
                  right:'0',
                  content:`''`,
                  background:theme.colors.strip,
                  zIndex:'-1',
                  transform: 'scaleX(0.75)',
                  transition: 'all 0.35s 0.15s cubic-bezier(0.86, 0, 0.07, 1)',
                  transformOrigin:'top left'
              },
              '&:hover::after' : {
                  transform:'scaleX(1.35) translateX(-8px)'
              },
              '&:hover svg' : {
                transform: 'translateX(-10px) translateY(-50%) scaleX(-1)',
              }
          }}>
  
          <svg css={{
              fill: theme.colors.primary,
              position:'absolute',
              left:'0',
              transition: 'all 0.35s 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              top:'50%',
              transform: 'translateY(-50%) scaleX(-1)',
          }} aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="40" height="40">
          <g transform="translate(0,-952.36218)">
          <path d="m 87.750716,1001.6724 -16.0001,-16.99995 c -0.3873,-0.4042 -1.0492,-0.4071 -1.4221,-0.047 -0.379,0.3659 -0.4068,1.0376 -0.047,1.4221 l 14.4063,15.31245 -71.68766,0 c -0.5523,0 -1,0.4477 -1,1 0,0.5523 0.4477,1 1,1 l 71.68766,0 -14.4063,15.3125 c -0.3601,0.3845 -0.3379,1.0621 0.047,1.4221 0.3846,0.36 1.0035,0.3689 1.4221,-0.047 l 16.0001,-17 c 0.3803,-0.468 0.2803,-1.0416 0,-1.3752 z"></path></g></svg>
          &nbsp;
          <span css={{
                  border: '0',
                  clip: 'rect(1px, 1px, 1px, 1px)',
                  clipPath: 'inset(50%)',
                  height: '1px',
                  margin: '-1px',
                  overflow: 'hidden',
                  padding: '0',
                  position: 'absolute',
                  width: '1px',
                  wordWrap: 'normal !important'
          }}>Back to home</span>
          </Link>
    )
}

export default ContactLink