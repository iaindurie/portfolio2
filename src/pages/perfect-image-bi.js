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
              headline: "Homepage design",
              img: data.bi1,
              alt: ''
            },
            
        ]}) => (
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
            <WorkTitle title="Perfect Image / BI" />
            <p>A fast static website for Perfect Image's Business Intelligence division. The site 
                is managed through Wordpress as a headless CMS, and the front-end is built in Gatsby.js and React.</p>

                <WorkDetail>
                <List>
                    <li>Wordpress headless CMS</li>
                    <li>HTML / CSS / React</li>
                    <li>GraphQL</li>
                    <li>Gatsby.js + React</li>
                </List>
            </WorkDetail>
            </WorkIntro>

           <WorkImages images={images} />
        </article>
    </Layout>
  )

  export const piQuery = graphql`
    query piQuery {
      bi1:  file(relativePath: { regex: "/bi-long@1.5x-50/" }) {
        absolutePath
        childImageSharp {
          fluid(maxWidth:1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            aspectRatio
          }
        }
      }
      
    }
`

