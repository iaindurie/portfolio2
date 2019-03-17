import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const WorkItem = (props) => (
  <article>
      <h1 css={{fontWeight: '300'}}>{props.title}</h1>
  </article>
)

export default WorkItem