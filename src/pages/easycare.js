
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
            <WorkTitle title="EasyCare Respond" />
            <p>I designed and helped to build a multi-section medical questionnaire, which enables users
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
                    
                </List>
            </WorkDetail>
            

        </article>
    </Layout>
  )

