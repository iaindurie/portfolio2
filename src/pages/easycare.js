
import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import WorkImages from '../components/work-images'
import SEO from '../components/seo'
import { rhythm } from "../utils/typography";


export default ({data,
    images = [
            {
              id: 'a',
              headline: 'Answering a question',
              img: data.easy1,
              alt: ''
            },
            {
              id: 'b',
              headline: 'Showing questionnaire progress',
              img: data.easy2,
              alt: ''
            },
            {
                id: 'c',
                headline: 'User dashboard',
                img: data.easy3,
                alt: ''
              }
        ]}) => (
    <Layout>
      <SEO title="Iain Durie - EasyCare Respond" />
        {/* <BackLink /> */}

        <article css={{
          padding:rhythm(5) + ' ' + rhythm(1),
          '@media(min-width:1050px)' : {
            display:'grid',
            gridTemplateColumns:'minmax(25%, 350px) 1fr',
            gridGap: rhythm(2)
          },
            
        }}>

        <WorkIntro>
            <WorkTitle title="EasyCare - Respond" />
            <p>I designed and built the front-end of a multi-section medical questionnaire, which enables users
                to refer patients for any necessary medical help they may need.</p>
                <WorkDetail>
                    <List>
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>Mockups</li>
                        <li>Prototypes</li>
                        <li>Interaction Design</li>
                        <li>HTML / CSS / JS</li>
                        <li>Performance auditing</li>
                    </List>
                </WorkDetail>
            </WorkIntro>

            <WorkImages images={images} />
        </article>
    </Layout>
  )

  export const homeQuery = graphql`
  query easyCareQuery {
    easy1:  file(relativePath: { regex: "/easycare1-xhdpi/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }
    easy2:  file(relativePath: { regex: "/easycare-progress/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }
    easy3:  file(relativePath: { regex: "/easycare-assessments/" }) {
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