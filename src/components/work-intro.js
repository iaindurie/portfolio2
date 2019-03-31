import React from "react"
import  { rhythm } from './../utils/typography'


const WorkTitle = (props) => (
  
    <header css={{marginBottom:rhythm(3), maxWidth:'600px', marginLeft:'auto', marginRight:'auto'}}>
        {props.children}
    </header>

)

export default WorkTitle


