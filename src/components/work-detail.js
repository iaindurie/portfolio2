import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const WorkTitle = (props) => (
  
  
<article>
        <h1 css={{
          background:'white',
          display:'inline-block',
          color: theme.colors.primary,
          padding:rhythm(0.2) + ' ' + rhythm(0.5),
          fontSize:rhythm(1.1),
          marginBottom:'0'
        }}>{props.title}</h1>

  </article>
)

export default WorkTitle


