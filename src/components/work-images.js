import { Link } from "gatsby"
import React, { Component } from "react"
import Image from "gatsby-image"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

class WorkImages extends Component {
    constructor(props) {
        super(props);
    
      }
  
      render() {
        const images = this.props.images;
     
        return (
          <div css={{maxWidth:'1200px', gridColumnStart:'2', gridRowStart:'1'}}>
        
            {images.map(i => (
              <figure key={i.id} css={{marginBottom:rhythm(5)}}>
                <figcaption css={{textAlign:'right',fontStyle:'italic'}}>
                    <h3 css={{fontSize:rhythm(0.45)}}>{i.headline}</h3>
                </figcaption>
                <Image fluid={i.img.childImageSharp.fluid} alt={i.alt} />
              </figure>
            ))}
          </div>
        );
      }
    }
    
export default WorkImages


