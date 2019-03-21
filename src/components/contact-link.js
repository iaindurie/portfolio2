import React from "react"
import styles from "./contact-link.module.css"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const ContactLink = (props) => {

    return(
        <a href="mailto:iaindurie@gmail.com" className={styles.link} css={{
            fontSize:rhythm(1.25),
            color:theme.colors.text,
        }}>
        
        <svg className={styles.hands} aria-role="img" x="0px" y="0px" viewBox="0 0 200 200" width="200" Height="200" css={{fill:theme.colors.primary}}>
        <g id="hands">
                <path d="M151.9,150.8c-0.2,0-0.4-0.2-0.4-0.4v-25.6l-2.3,0.3c-0.9,0.1-1.8,0.2-2.8,0.2c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4
                    c4,0,7-1.1,9.3-3.4c4.5-4.6,4.4-12.6,4.3-16.4c0-0.4,0-0.8,0-1.1V70.9c0-2.3-1.9-4.1-4.1-4.1s-4.1,1.9-4.1,4.1l0,22.7
                    c0,0.2-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4V70.9c0-0.1,0-0.2,0-0.3l0-0.2l0-0.3l0-8.6c0-2.3-1.9-4.1-4.1-4.1s-4.1,1.9-4.1,4.1v28.9
                    c0,0.2-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4V54c0-2.3-1.9-4.1-4.1-4.1s-4.1,1.9-4.1,4.1v36.5c0,0.2-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4
                    V60c0-2.3-1.9-4.1-4.1-4.1c-2.3,0-4.1,1.9-4.1,4.1v28.3c0,1.9-0.8,3.7-2.1,5l-1.7,1.6l2.3,2.3c0.1,0.1,0.1,0.4,0,0.5
                    c-0.1,0.1-0.2,0.1-0.2,0.1c-0.1,0-0.2,0-0.3-0.1l-10.8-11.1c-0.9-0.9-2.2-1.4-3.5-1.4c-1.3,0-2.6,0.5-3.5,1.5c-1,1-1.5,2.2-1.5,3.6
                    c0,1.3,0.5,2.5,1.4,3.4l0.1,0.1l2.8,2.3c3.2,3.1,4.1,7.2,5,10.8c3.9,16.6,12.5,17.9,15,17.9c0.4,0,0.6,0,0.6,0c0,0,0,0,0,0
                    c0.2,0,0.4,0.1,0.4,0.3c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.3,0-0.6,0l-2,0l0,24.7c0,0.2-0.2,0.4-0.4,0.4
                    s-0.4-0.2-0.4-0.4v-25l-1.3-0.5c-3.9-1.5-9.1-5.8-11.9-17.7c-1-4.2-2-7.7-4.7-10.4l-0.1-0.1l-2.8-2.3c-1.1-1.1-1.7-2.5-1.7-4.1
                    c0-1.5,0.6-3,1.7-4.1c1.1-1.1,2.5-1.7,4-1.7c1.5,0,2.9,0.6,4,1.6l8,8.3l1.7-1.6c1.2-1.2,1.9-2.8,1.9-4.4V60c0-2.7,2.2-4.8,4.8-4.8
                    c0.5,0,1,0.1,1.5,0.3l2.4,0.8l0.2-2.6c0.2-2.5,2.3-4.5,4.8-4.5c2.7,0,4.8,2.2,4.8,4.8v3.9l2.6-0.9c0.6-0.2,1.1-0.3,1.5-0.3
                    c2.7,0,4.8,2.2,4.8,4.8v5.5l2.6-0.9c0.6-0.2,1.1-0.3,1.5-0.3c2.7,0,4.8,2.2,4.8,4.8v32.9c0,0.2,0,1,0,1c0.1,3.9,0.2,12.1-4.5,16.9
                    c-0.8,0.9-1.8,1.6-2.9,2.1l-1.1,0.6v26C152.3,150.7,152.1,150.8,151.9,150.8z"/>
                <path d="M135.3,118.6c-0.2,0-0.4-0.2-0.4-0.4c0-8.3-5.2-12-5.4-12.1c-0.2-0.1-0.2-0.3-0.1-0.5c0.1-0.1,0.2-0.2,0.3-0.2
                    c0.1,0,0.1,0,0.2,0.1c0.2,0.2,5.7,4,5.7,12.7C135.7,118.4,135.5,118.6,135.3,118.6z"/>
                <path d="M48.1,150.8c-0.2,0-0.4-0.2-0.4-0.4v-26l-1.1-0.6c-1.1-0.6-2.1-1.3-2.9-2.1c-4.7-4.8-4.6-13-4.5-16.9c0,0,0-0.8,0-1V70.9
                    c0-2.7,2.2-4.8,4.8-4.8c0.5,0,0.9,0.1,1.5,0.3l2.6,0.9v-5.5c0-2.7,2.2-4.8,4.8-4.8c0.5,0,0.9,0.1,1.5,0.3l2.6,0.9V54
                    c0-2.7,2.2-4.8,4.8-4.8c2.5,0,4.6,2,4.8,4.5l0.2,2.6l2.4-0.8c0.6-0.2,1.1-0.3,1.5-0.3c2.7,0,4.8,2.2,4.8,4.8l0,28.3
                    c0,1.7,0.7,3.3,1.9,4.4l1.7,1.6l8-8.2c1.1-1,2.5-1.6,4-1.6c1.5,0,3,0.6,4,1.7c1.1,1.1,1.7,2.5,1.7,4.1c0,1.5-0.6,2.9-1.7,4
                    l-0.1,0.1l-2.7,2.2l-0.1,0.1c-2.7,2.7-3.7,6.2-4.7,10.4c-2.8,11.9-8,16.2-11.9,17.7l-1.3,0.5l0,25c0,0.2-0.2,0.4-0.4,0.4
                    s-0.4-0.2-0.4-0.4v-24.7h-2c-0.3,0-0.5,0-0.6,0c-0.1,0-0.2-0.1-0.3-0.1c0-0.1-0.1-0.1-0.1-0.3c0-0.2,0.2-0.3,0.4-0.3
                    c0.1,0,0.4,0,0.7,0c2.6,0,11.2-1.3,15-17.9c0.8-3.6,1.8-7.7,5-10.8l2.8-2.3l0.1-0.1c0.9-0.9,1.4-2.1,1.4-3.4c0-1.3-0.5-2.6-1.5-3.6
                    c-0.9-0.9-2.2-1.5-3.5-1.5c-1.3,0-2.6,0.5-3.5,1.4L77.1,97.6c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.2-0.1
                    c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3l2.3-2.3l-1.7-1.6c-1.3-1.3-2.1-3.1-2.1-5V60c0-2.3-1.9-4.1-4.1-4.1
                    s-4.1,1.9-4.1,4.1v30.5c0,0.2-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4V54c0-2.3-1.9-4.1-4.1-4.1c-2.3,0-4.1,1.9-4.1,4.1v36.5
                    c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4V61.6c0-2.3-1.9-4.1-4.1-4.1s-4.1,1.9-4.1,4.1l0,8.6l0,0.1l0,0.1v0.1
                    c0,0.1,0,0.3,0,0.4v22.6c0,0.2-0.2,0.4-0.4,0.4s-0.4-0.2-0.4-0.4V70.9c0-2.3-1.9-4.1-4.1-4.1s-4.1,1.9-4.1,4.1v32.9c0,0.2,0,1,0,1
                    c-0.1,3.8-0.2,11.8,4.3,16.4c2.3,2.3,5.3,3.4,9.3,3.4c0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4c-0.9,0-1.8-0.1-2.8-0.2l-2.3-0.3
                    l0,25.6C48.4,150.6,48.3,150.8,48.1,150.8z"/>
                <path d="M64.6,118.6c-0.2,0-0.4-0.2-0.4-0.4c0-8.8,5.5-12.6,5.7-12.7c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0.2
                    c0.1,0.2,0.1,0.4-0.1,0.5c-0.2,0.2-5.4,3.8-5.4,12.1C65,118.4,64.8,118.6,64.6,118.6z"/>
            </g>
            <g className={styles.lines}>
                    <path d="M117.2,50.2c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l6.8-6.7c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7l-6.8,6.7
                        C117.5,50.2,117.3,50.2,117.2,50.2z"/>
            
                    <path d="M99.9,41.9L99.9,41.9c-0.3,0-0.5-0.2-0.5-0.5l0-7.7c0-0.3,0.2-0.5,0.5-0.5h0c0.3,0,0.5,0.2,0.5,0.5l0,7.7
                        C100.4,41.6,100.2,41.9,99.9,41.9z"/>
                
                    <path d="M82.8,50.6c-0.1,0-0.3,0-0.4-0.1l-6.7-6.7c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l6.7,6.7c0.2,0.2,0.2,0.5,0,0.7
                        C83,50.5,82.9,50.6,82.8,50.6z"/>
            </g>
            </svg>
    
    
          <span>Say hello</span>
        </a>
    )
}

export default ContactLink