

import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import Image from "gatsby-image"
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import { rhythm } from "../utils/typography";

export default ({data}) => (
    <Layout>
        <article css={{padding:rhythm(5) + ' ' + rhythm(1.25)}}>

        <WorkIntro>
            <WorkTitle title="Perfect Image / BI" />
            <p>A design for a themeable hotel gift experience website. The design allows for hotels to apply their own customisations
                and branding to create attractive experiences for potential customers.
            </p>
            </WorkIntro>


            <WorkDetail>
                <List>
                
                    <li>Wireframes</li>
                    <li>Mockups</li>
                    <li>Prototyping</li>
                </List>
            </WorkDetail>
            

        </article>
    </Layout>
  )

