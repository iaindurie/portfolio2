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
              headline: "Landing page design in a light theme",
              img: data.sk1,
              alt: ''
            },
            {
              id: 'b',
              headline: 'Dark variation of landing page',
              img: data.sk2,
              alt: ''
            },
            {
                id: 'c',
                headline: "Viewing voucher listings",
                img: data.sk3,
                alt: ''
              },
            {
              id: 'd',
              headline: "Viewing a single voucher",
              img: data.sk4,
              alt: ''
            },
            {
              id: 'e',
              headline: "Viewing the basket",
              img: data.sk5,
              alt: ''
            },
        ]}) => (
    <Layout>
      <SEO title="Iain Durie - SK Chase" />
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
                <WorkTitle title="SK Chase" />
                <p>A design for a themeable hotel gift experience website. The design allows for hotels to apply their own customisations
                    and branding to create attractive experiences for potential customers.
                </p>
                <WorkDetail>
                    <List>
                        <li>Requirements gathering</li>
                        <li>Wireframes</li>
                        <li>Mockups</li>
                        <li>Prototyping</li>
                    </List>
                </WorkDetail>
            </WorkIntro>
            
            <WorkImages images={images} />
        </article>
    </Layout>
  )

  export const homeQuery = graphql`
  query skQuery {
    
    sk1:  file(relativePath: { regex: "/sk1@1.5x-50/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }

    sk2:  file(relativePath: { regex: "/sk-dark@2x-50/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }

    sk3:  file(relativePath: { regex: "/sk-listing@2x-50/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }

    sk4:  file(relativePath: { regex: "/sk-single@2x-50/" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth:1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          aspectRatio
        }
      }
    }

    sk5:  file(relativePath: { regex: "/sk-basket@2x-50/" }) {
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