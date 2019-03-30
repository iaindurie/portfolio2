import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'


const HeaderImage = ({ data }) => (
    <Image css={{opacity:'0.15',
    position:'absolute !important',
    top:'0', left:'0', zIndex:'1',
width:'100%', height:'100vh'}} fluid={data.headerImgQuery.childImageSharp.fluid} alt="My workspace" />
)

export default props => (
  <StaticQuery
    query={graphql`
        query headerImgQuery {
        headerImgQuery:  file(relativePath: { regex: "/header/" }) {
          childImageSharp {
            fluid(maxWidth:2000, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <HeaderImage data={data} {...props} />}
  />
)
