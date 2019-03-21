
import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import BackLink from '../components/back-link'
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import { rhythm } from "../utils/typography";

export default ({data}) => (
    <Layout>
        <BackLink />
        <article css={{padding:rhythm(5) + ' ' + rhythm(1.25)}}>

        <WorkIntro>
            <WorkTitle title="Perfect Image / BI" />
            <p>A fast static website for Perfect Image's Business Intelligence division, which is managed through Wordpress as a headless CMS.</p>
            </WorkIntro>

            <WorkDetail>
                <List>
                    <li>Wordpress headless CMS</li>
                    <li>HTML / CSS / React</li>
                    <li>GraphQL</li>
                    <li>Gatsby.js</li>
                </List>
            </WorkDetail>
            
        </article>
    </Layout>
  )

