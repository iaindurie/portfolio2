import React from "react"
import ContactLink from './contact-link'
import  { rhythm } from './../utils/typography'

const Footer = () => (
  <footer css={{padding:rhythm(1.25), textAlign:'center'}}>

    <ContactLink />

  
  </footer>
)

export default Footer