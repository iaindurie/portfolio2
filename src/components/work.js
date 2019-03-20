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
  
        <WorkItem
        title="Ringtons"
        type="Mobile app"
        mainPic={data.mainRingtons}
        alt="Ringtons app screenshot"
        critical="true" />

        <WorkItem
        title="Avail"
        type="Mobile app"
        mainPic={data.mainRingtons}
        alt="Avail app screenshot"
        critical="true" />

        <WorkItem
        title="EasyCare Respond"
        type="Web app"
        mainPic={data.mainRingtons}
        alt="respond app screenshot"
        critical="true" />

        <WorkItem
        title="Perfect Image / BI"
        type="Website"
        mainPic={data.mainRingtons}
        alt="Respond app screenshot"
        critical="true" />

        <WorkItem
        title="Connect the Doc"
        type="Web app"
        mainPic={data.mainRingtons}
        alt="Connect the Doc app screenshot"
        critical="true" />
    </div>
    )}
  />
)



