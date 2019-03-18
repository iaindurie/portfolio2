import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import { StaticQuery } from "gatsby"
import WorkItem from './work-item'
import  { rhythm } from './../utils/typography'


export default () => (
<StaticQuery
    query={graphql`
      query workQuery {
        mainRingtons:  file(relativePath: { regex: "/main-ringtonsxhdpi/" }) {
          absolutePath
          childImageSharp {
            fluid(maxWidth: 125) {
              ...GatsbyImageSharpFluid
              aspectRatio
            }
          }
        }
      }
    `}
    render={data => (
      <div css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: 'auto',
        padding:'30px',
        gridGap: rhythm(1)
      }}>
  
      {/* <WorkItem title="Avail" centered="true" />
  
      <WorkItem title="EasyCare" />
  
      <WorkItem title="Perfect Image" /> */}
  
      <WorkItem title="Ringtons" centered="true" mainPic={data.mainRingtons} />
    </div>
    )}
  />
)



