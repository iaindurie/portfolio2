import React from "react"
import Helmet from "react-helmet"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'
import styles from './skills.module.css'

const Skills= (props) => {
    
    return(
        <section css={{padding:rhythm(1.25), marginBottom:rhythm(3), marginLeft:'auto', marginRight:'auto',maxWidth:'1600px'}}>
            <h2 css={{marginBottom:rhythm(2)}}>What I do</h2>
            <div className={styles.skills} css={{gridGap:rhythm(2)}}>
                <div>
                    <h3 className={styles.skillTitle} css={{marginBottom:rhythm(0.5)}}>Design</h3>
                    <ul className={styles.list}>
                        <li>User research</li>
                        <li>Wireframes</li>
                        <li>Mockups</li>
                        <li>Prototypes</li>
                        <li>Style guides</li>
                        <li>Pattern libraries</li>
                        <li>Branding</li>
                    </ul>
                </div>

                <div>
                <h3 className={styles.skillTitle} css={{marginBottom:rhythm(0.5)}}>Build</h3>
                    <ul className={styles.list}>
                        <li>Websites</li>
                        <li>Web apps</li>
                        <li>Mobile apps</li>
                        <li>Portals</li>
                        <li>Emails</li>
                    </ul>
                </div>
                    
                <div>
                <h3 className={styles.skillTitle} css={{marginBottom:rhythm(0.5)}}>Code</h3>
                    <ul className={styles.list}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>XAML</li>
                        <li>Frameworks</li>
                        <li>Automation</li>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Git</li>
                    </ul>
                </div>

                <div>
                <h3 className={styles.skillTitle} css={{marginBottom:rhythm(0.5)}}>Important!</h3>
                    <ul className={styles.list}>
                        <li>Usability</li>
                        <li>Accessibility</li>
                        <li>Agile</li>
                        <li>Front-end performance</li>
                        <li>User focus</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills