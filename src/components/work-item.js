import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'


const WorkItem = (props) => (
  
  <article>
    {  console.log(props.mainPic) }
      <h1 css={{fontWeight: '300'}}>{props.title}</h1>
      {props.mainPic &&
        <Image fluid={props.mainPic.childImageSharp.fluid} />
      }
  </article>
)

export default WorkItem