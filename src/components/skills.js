import React from "react"
import  { rhythm } from './../utils/typography'
import styles from './skills.module.css'

const Skills= (props) => {
    
    return(
        <div className={styles.skills} css={{fontSize:rhythm(0.5),gridGap:rhythm(2)}}>
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
                        <li>Bespoke sysytems</li>
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
                        <li>APIs</li>
                        <li>GraphQL</li>
                        {/* <li>Node</li> */}
                        <li>Git</li>
                    </ul>
                </div>

                
            </div>
    
    )
}

export default Skills