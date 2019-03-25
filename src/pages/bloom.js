import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import BackLink from '../components/back-link'
import WorkImages from '../components/work-images'
import { rhythm } from "../utils/typography";

export default ({data, 
  images = [
          {
            id: 'a',
            headline: "Finding a user's company",
            img: data.bloom1,
            alt: ''
          },
          {
            id: 'b',
            headline: 'Confirming company details',
            img: data.bloom2,
            alt: ''
          },
          {
              id: 'c',
              headline: "Editing company details",
              img: data.bloom3,
              alt: ''
            },
          {
            id: 'd',
            headline: "Entering sign-up details",
            img: data.bloom4,
            alt: ''
          },
          {
            id: 'e',
            headline: "Awaiting user confirmation",
            img: data.bloom5,
            alt: ''
          },
      ]}) => (
    <Layout>
        <BackLink />
        <article css={{
            padding:rhythm(5) + ' ' + rhythm(1.25),
            display:'grid',
            gridTemplateColumns:'minmax(25%, 350px) 1fr',
            gridGap: rhythm(2)
        }}>

        <WorkIntro>
            <WorkTitle title="Bloom sign-up" />
            <p>This is a sign-up experience for Bloom, a procurement platform. The sign-up preocess needs to ensure
                users stay engaged through the entire data capture process.
            </p>

            <WorkDetail>
                <List>
                    <li>User research</li>
                    <li>Wireframes</li>
                    <li>Mockups</li>
                    <li>Prototypes</li>
                </List>
            </WorkDetail>
            </WorkIntro>

            <WorkImages images={images} />
        </article>
    </Layout>

  )


export const homeQuery = graphql`
    query bloomQuery {
      
      bloom1:  file(relativePath: { regex: "/bloom1@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom2:  file(relativePath: { regex: "/bloom2@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom3:  file(relativePath: { regex: "/bloom3@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom4:  file(relativePath: { regex: "/bloom4@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }

      bloom5:  file(relativePath: { regex: "/bloom5@2x-80/" }) {
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