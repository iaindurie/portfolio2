import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import styles from './list.module.css'
import  { rhythm } from './../utils/typography'



const List = (props) => (
  <ul className={styles.list}>
    {props.children}
  </ul>
)

export default List