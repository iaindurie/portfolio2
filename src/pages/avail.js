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
            img: data.avail1,
            alt: ''
        },
        {
            id: 'b',
            headline: 'Rejecting a job by dragging left',
            img: data.avail2,
            alt: ''
        },
        {
            id: 'c',
            headline: "Viewing a driver's schedule",
            img: data.avail3,
            alt: ''
            },
        {
            id: 'd',
            headline: "Viewing a driver's recent activity",
            img: data.avail4,
            alt: ''
        },
    ]
}) => (
  

    <Layout>
        <BackLink />
        
        <article css={{
          padding:rhythm(5) + ' ' + rhythm(1.25),
          '@media(min-width:1050px)' : {
            display:'grid',
            gridTemplateColumns:'minmax(25%, 350px) 1fr',
            gridGap: rhythm(2)
          },
            
        }}>
            <WorkIntro>
                <WorkTitle title="Avail" />
                <p>I designed and coded the fron-end of an iOS/Android app which allows hauliers and
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


            <WorkImages images={images} height="full" />
            
        </article>
    </Layout>
  )


export const homeQuery = graphql`
    query availQuery {
      avail1:  file(relativePath: { regex: "/avail1@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      avail2:  file(relativePath: { regex: "/avail2@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      avail3:  file(relativePath: { regex: "/avail3@2x-80/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      avail4:  file(relativePath: { regex: "/avail4@2x-80/" }) {
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