import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import Image from "gatsby-image"
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import BackLink from '../components/back-link'
import { rhythm } from "../utils/typography";

export default ({data}) => (
    <Layout>
         <BackLink />
        <article css={{padding:rhythm(5) + ' ' + rhythm(1.25)}}>

        <WorkIntro>
            <WorkTitle title="Bloom sign-up" />
            <p>This is a sign-up experience for Bloom, a procurement platform. The sign-up preocess needs to ensure
                users stay engaged through the data capture process.
            </p>
            </WorkIntro>


            <WorkDetail>
                <List>
                    <li>User research</li>
                    <li>Wireframes</li>
                    <li>Mockups</li>
                    <li>Prototypes</li>
                </List>
            </WorkDetail>


    
            

        </article>
    </Layout>
  )


export const homeQuery = graphql`
    query bloomQuery {
      
      bloom1:  file(relativePath: { regex: "/bloom-hdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom2:  file(relativePath: { regex: "/bloom-hdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom3:  file(relativePath: { regex: "/bloom-hdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom4:  file(relativePath: { regex: "/bloom-hdpi/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom5:  file(relativePath: { regex: "/bloom-hdpi/" }) {
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