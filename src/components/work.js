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
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
              aspectRatio
            }
          }
        }
      }
    `}
    render={data => (
      // <div css={{
      //   display: 'grid',
      //   gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      //   gridTemplateRows: 'auto',
      //   padding:'30px',
      //   gridGap: rhythm(1)
      // }}>

      <div css={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
  
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



