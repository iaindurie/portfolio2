import React from "react"
import Helmet from "react-helmet"


const SEO = (props) => {
    const content = props.content;
    const keys = props.keys;

    return(
        

        <Helmet meta={[
            {
                name: 'keywords',
                content: keys
            },
            {
                name: 'description',
                content: content
            }
        ]} title={props.title} />

    )
}

export default SEO