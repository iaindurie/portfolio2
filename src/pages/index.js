import React from "react"
import Layout from "../components/layout"
import Work from "../components/work"
import SEO from '../components/seo'
import Skills from '../components/skills'
import Header from '../components/header'

export default ({data}) => (
  <div>
    <Header />
    <Layout>
      <SEO title="Iain Durie - UX Engineer" />
      <Work projects={data} />
      <Skills />
    </Layout>
  </div>
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
      mainAvail:  file(relativePath: { regex: "/avail1@2x-80/" }) {
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
      mainBloom:  file(relativePath: { regex: "/bloom-hdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      mainBI:  file(relativePath: { regex: "/bi1-hdpi/" }) {
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



