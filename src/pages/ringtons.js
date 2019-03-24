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
            <p>A UWP app that helps Ringtons delivery drivers plan and execute their working day.
          Users can organise their delivery schedule, manage users, reconcile stock and take payments - making their 
          working day more efficient, and their ability to sell items easier.</p>
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

  export const ringtonsQuery = graphql`
  query ringtonsQuery {
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