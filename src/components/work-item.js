import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'




const WorkItem = (props) => (
  
  <article css={{
    height:'90vw',
    flex:'1',
    display:'flex',
    alignItems:'center'}}>
    <div css={{height:'100%'}}>
      {props.mainPic &&
        <Image fluid={props.mainPic.childImageSharp.fluid} alt={props.alt} />
      }
      </div>
      <div>
      <h1 css={{
        background:'white',
        display:'inline-block',
        marginBottom:rhythm(0.5),
        color: theme.colors.primary,
        padding:rhythm(0.2),
        fontSize:rhythm(0.9)}}>{props.title}</h1>

      <h2 css={{
        fontSize:rhythm(0.65),
        paddingLeft:rhythm(0.2)}}>{props.type}</h2>
        </div>
  </article>
)

export default WorkItem