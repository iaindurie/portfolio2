import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'
import styles from './work-detail.module.css'
import { style } from "glamor";

const WorkTitle = (props) => (
  
    <header css={{marginBottom:rhythm(3), maxWidth:'600px', marginLeft:'auto', marginRight:'auto'}}>
        {props.children}
    </header>

)

export default WorkTitle


