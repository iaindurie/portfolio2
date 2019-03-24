import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const WorkTitle = (props) => (
  
<h1 css={{fontSize:rhythm(0.9)}}>{props.title}</h1>
)

export default WorkTitle


