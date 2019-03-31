import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import WorkImages from '../components/work-images'
import SEO from '../components/seo'
import theme from './../utils/variables'
import { rhythm } from "../utils/typography";

export default ({data, 
    images = [
            {
              id: 'a',
              headline: "Viewing a driver's schedule",
              img: data.ringtons1,
              alt: '',
              orientation: 'portrait'
            },
            {
              id: 'b',
              headline: "Viewing a customer's basket",
              img: data.ringtons2,
              alt: '',
              orientation: 'portrait'
            },
            {
                id: 'c',
                headline: "Viewing a customer's profile",
                img: data.ringtons3,
                alt: '',
                orientation: 'portrait'
            },
            {
              id: 'd',
              headline: "Viewing a customer's history",
              img: data.ringtons4,
              alt: '',
              orientation: 'portrait'
            },
        ]}) => (
    <Layout>
      <SEO title="Iain Durie - Ringtons" />
       {/* <BackLink /> */}
       <article css={{
          padding:rhythm(5) + ' ' + rhythm(1),
          '@media(min-width:1300px)' : {
            display:'grid',
            gridTemplateColumns:'minmax(25%, 350px) 1fr',
            gridGap: rhythm(2)
          },
            
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

           <WorkImages images={images} maxWidth={data.ringtons1.childImageSharp.fluid.presentationWidth} />

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