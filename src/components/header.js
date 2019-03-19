import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const Header = ({ siteTitle, jobDesc }) => (
  <header css={{
      padding: rhythm(1) + ' ' + rhythm(1.25),
      textAlign: 'center',
      '@media(min-width: 780px)' : {
        textAlign: 'left'
      }
    }}>
    <Link to="/" css={{textDecoration:'none'}}>
      <h1 style={{ margin: '0' }}>
        <span css={{ display: `block`, color: theme.colors.primary }}>{siteTitle}</span>
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