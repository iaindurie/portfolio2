import React from "react"
import Layout from "../components/layout"
import Work from "../components/work"
import SEO from '../components/seo'

export default ({data}) => (
    <Layout>
        <SEO title="Iain Durie - UX Engineer" />
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
      mainEasyCare:  file(relativePath: { regex: "/easycare1-xhdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      mainSK:  file(relativePath: { regex: "/sk1-hdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
    }
`



