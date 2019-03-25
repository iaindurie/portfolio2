import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'
import styles from './work-detail.module.css'
import { style } from "glamor";

const WorkTitle = (props) => (
  
    <aside css={{gridColumnStart:'1', marginBottom:rhythm(3)}} className={styles.workDetail}>
        <h3 css={{paddingTop:rhythm(2)}}>What I did</h3>
        {props.children}
  </aside>
)

export default WorkTitle


