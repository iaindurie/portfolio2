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
            fluid(maxWidth:800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              aspectRatio
            }
          }
        }
      }
    `}
    render={data => (

      <div>
  
      {/* <WorkItem title="Avail" centered="true" />
  
      <WorkItem title="EasyCare" />
  
      <WorkItem title="Perfect Image" /> */}
  
      <WorkItem
        title="Ringtons"
        type="Mobile app"
        mainPic={data.mainRingtons}
        alt="Ringtons app screenshot"
        critical="true" />
    </div>
    )}
  />
)



