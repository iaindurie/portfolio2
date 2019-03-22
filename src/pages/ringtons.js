

import React from "react"
import Layout from "../components/layout"
import WorkTitle from "../components/work-title"
import List from '../components/list'
import Image from "gatsby-image"
import WorkDetail from '../components/work-detail'
import WorkIntro from '../components/work-intro'
import BackLink from '../components/back-link'
import { rhythm } from "../utils/typography";

export default ({data}) => (
    <Layout>
       <BackLink />
        <article css={{padding:rhythm(5) + ' ' + rhythm(1.25)}}>

        <WorkIntro>
            <WorkTitle title="Perfect Image / BI" />
            <p>A UWP app that helps Ringtons delivery drivers plan and execute their working day.
          Users can organise their delivery schedule, manage users, reconcile stock and take payments - making their 
          working day more efficient, and their ability to sell items easier.</p>
            </WorkIntro>


            <WorkDetail>
                <List>
                <li>User research</li>
                    <li>User flows</li>
                    <li>Wireframes</li>
                    <li>Mockups</li>
                    <li>XAML coding</li>
                </List>
            </WorkDetail>
            

        </article>
    </Layout>
  )

