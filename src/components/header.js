import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const Header = ({ siteTitle, jobDesc }) => (
  <header css={{
    position:'fixed',
      padding: rhythm(1) + ' ' + rhythm(1.25),
      textAlign: 'center',
      '@media(min-width: 780px)' : {
        textAlign: 'left'
      }
    }}>
    <Link to="/" css={{textDecoration:'none'}}>
      <h1 css={{
        margin: '0',
        
      }}>
        <span css={{ display: `inline-block`,
        color: theme.colors.primary,
        position:'relative',
        '&::after' : {
          content:`''`,
          background:'white',
          position:'absolute',
          top:'0',
          bottom:'0',
          right:'0',
          left:'0',
          zIndex:'-1'
        }
        }}>{siteTitle}</span>
        <span css={{ fontWeight:'400',display: `block`, color: theme.colors.text, fontSize: rhythm(1.1) }}>{jobDesc}</span>
      </h1>
    </Link>
    
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Iain Durie`,
  jobDesc: `UX Engineer`
}

export default Header