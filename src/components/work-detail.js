import React from "react"
import  { rhythm } from './../utils/typography'
import styles from './work-detail.module.css'

const WorkTitle = (props) => (
  
    <aside css={{gridColumnStart:'1', marginBottom:rhythm(3)}} className={styles.workDetail}>
        <h3 css={{paddingTop:rhythm(2)}}>What I did</h3>
        {props.children}
  </aside>
)

export default WorkTitle


