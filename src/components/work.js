import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import WorkItem from './work-item'
import  { rhythm } from './../utils/typography'

const Work = (props) => (
  <div css={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: 'auto',
      padding:'30px',
      gridGap: rhythm(1)
    }}>
    <WorkItem title="Avail" centered="true" />
    <WorkItem title="EasyCare" />
    <WorkItem title="Perfect Image" />
    <WorkItem title="Ringtons" centered="true" />
  </div>
)

export default Work