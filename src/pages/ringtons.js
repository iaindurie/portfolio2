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
              headline: "Viewing a driver's schedule",
              img: data.ringtons1,
              alt: ''
            },
            {
              id: 'b',
              headline: "Viewing a customer's basket",
              img: data.ringtons2,
              alt: ''
            },
            {
                id: 'c',
                headline: "Viewing a customer's profile",
                img: data.ringtons3,
                alt: ''
              },
            {
              id: 'd',
              headline: "Viewing a customer's history",
              img: data.ringtons4,
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
            <WorkTitle title="Ringtons" />
            <p>A <acronym title="Universal Windows Platform">UWP</acronym> app that helps Ringtons delivery drivers plan and execute their working day.
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

           <WorkImages images={images} height="full" />

        </article>
    </Layout>
  )

  export const ringtonsQuery = graphql`
  query ringtonsQuery {
    ringtons1:  file(relativePath: { regex: "/ringtons1@2x-80/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }
    ringtons2:  file(relativePath: { regex: "/ringtons2@2x-80/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }
    ringtons3:  file(relativePath: { regex: "/ringtons3@2x-80/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }
    ringtons4:  file(relativePath: { regex: "/ringtons4@2x-80/" }) {
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