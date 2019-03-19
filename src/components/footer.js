import { Link } from "gatsby"
import React from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const Footer = () => (
  <footer css={{padding:'30px', textAlign:'center'}}>
    <span css={{fontSize:'200px'}}>🙌</span>
    <div>
    <a href="mailto:iaindurie@gmail.com" css={{textDecoration:'none',fontSize:rhythm(1.25),color:theme.colors.text}}>Say hello</a>
    </div>
  </footer>
)

export default Footer