import React from "react"
import styles from './list.module.css'




const List = (props) => (
  <ul className={styles.list}>
    {props.children}
  </ul>
)

export default List