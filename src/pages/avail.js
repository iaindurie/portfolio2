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
            headline: "Viewing a list of a driver's available jobs",
            img: data.avail1,
            alt: '',
            orientation: 'portrait'
        },
        {
            id: 'b',
            headline: 'Rejecting a job by dragging left',
            img: data.avail2,
            alt: '',
            orientation: 'portrait'
        },
        {
            id: 'c',
            headline: "Viewing a driver's schedule",
            img: data.avail3,
            alt: '',
            orientation: 'portrait'
            },
        {
            id: 'd',
            headline: "Viewing a driver's recent activity",
            img: data.avail4,
            alt: '',
            orientation: 'portrait'
        },
    ]
}) => (
  

    <Layout>
      <SEO title="Iain Durie - Avail mobile app" />
        
        <article css={{
          padding:rhythm(5) + ' ' + rhythm(1),
          '@media(min-width:1300px)' : {
            display:'grid',
            gridTemplateColumns:'minmax(25%, 350px) 1fr',
            gridGap: rhythm(2)
          },
            
        }}>
            <WorkIntro>
                <WorkTitle title="Avail" />
                <p>I designed and coded the front-end of an iOS/Android app which allows hauliers and
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


            <WorkImages images={images} maxWidth={data.avail1.childImageSharp.presentationWidth} />
            
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