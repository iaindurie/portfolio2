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
              headline: "Homepage design",
              img: data.bi1,
              alt: '',
              orientation: 'landscape-large'
            },
            
        ]}) => (
    <Layout>
      <SEO title="Iain Durie - Perfect Image / BI" />
        
        <article css={{
          padding:rhythm(5) + ' ' + rhythm(1),
          '@media(min-width:1300px)' : {
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

           <WorkImages images={images} maxWidth={data.bi1.childImageSharp.fluid.presentationWidth} />

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

