import React from "react"
import Layout from "../components/layout"
import Work from "../components/work"

export default ({data}) => (
    <Layout>
        <Work projects={data} />
    </Layout>
)


export const homeQuery = graphql`
    query homeQuery {
      mainRingtons:  file(relativePath: { regex: "/ringtons1-xhdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      mainAvail:  file(relativePath: { regex: "/avail1-xhdpi/" }) {
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
`