
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
            <WorkTitle title="EasyCare - Respond" />
            <p>I designed and built the front-end of a multi-section medical questionnaire, which enables users
                to refer patients for any necessary medical help they may need.</p>
            </WorkIntro>


            <WorkDetail>
                <List>
                    <li>User research</li>
                    <li>Wireframes</li>
                    <li>Mockups</li>
                    <li>Prototypes</li>
                    <li>Interaction Design</li>
                    <li>HTML / CSS / JS</li>
                    <li>Performance auditing</li>
                </List>
            </WorkDetail>
            

        </article>
    </Layout>
  )

