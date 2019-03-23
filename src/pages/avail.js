import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import Image from "gatsby-image"
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import BackLink from '../components/back-link'
import WorkImages from '../components/work-images'
import { rhythm } from "../utils/typography";



// {const }

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
                headline: 'Viewing assessments',
                img: data.easy3,
                alt: ''
              },
            {
              id: 'd',
              headline: 'Transitioning to another section',
              img: data.easy3,
              alt: ''
            },
        ]

}) => (
  

    <Layout>
        <BackLink />
        
        <article css={{
            padding:rhythm(5) + ' ' + rhythm(1.25),
            display:'grid',
            gridTemplateColumns:'minmax(25%, 350px) 1fr',
            gridGap: rhythm(2)
        }}>

            <WorkIntro>
                <WorkTitle title="Avail" />
                <p>I designed and helped to build an iOS/Android app which allows hauliers and
                drivers to connect with each other - offering and accepting haulage jobs on the go.</p>
                <WorkDetail>
                <List>
                    <li>User research</li>
                    <li>User flows</li>
                    <li>Wireframes</li>
                    <li>Mockups</li>
                    <li>XAML coding</li>
                </List>
            </WorkDetail>
            </WorkIntro>


            <WorkImages images={images} />
            
            
        </article>
    </Layout>
  )


export const homeQuery = graphql`
    query availQuery {
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