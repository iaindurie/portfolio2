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
              headline: "Viewing a list of a driver's available jobs",
              img: data.easy1,
              alt: ''
            },
            {
              id: 'b',
              headline: 'Rejecting a job by dragging left',
              img: data.easy2,
              alt: ''
            },
            {
                id: 'c',
                headline: "Viewing a driver's schedule",
                img: data.easy3,
                alt: ''
              },
            {
              id: 'd',
              headline: "Viewing a driver's recent activity",
              img: data.easy3,
              alt: ''
            },
        ]}) => (
    <Layout>
        <BackLink />
        <article css={{padding:rhythm(5) + ' ' + rhythm(1.25)}}>

        <WorkIntro>
            <WorkTitle title="Perfect Image / BI" />
            <p>A fast static website for Perfect Image's Business Intelligence division. The site 
                is managed through Wordpress as a headless CMS.</p>

                <WorkDetail>
                <List>
                    <li>Wordpress headless CMS</li>
                    <li>HTML / CSS / React</li>
                    <li>GraphQL</li>
                    <li>Gatsby.js</li>
                </List>
            </WorkDetail>
            </WorkIntro>

            
            


           <WorkImages images={images} />
        </article>
    </Layout>
  )

  export const piQuery = graphql`
    query piQuery {
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

