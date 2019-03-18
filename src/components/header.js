import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import theme from './../utils/variables'
import  { rhythm } from './../utils/typography'

const Header = ({ siteTitle, jobDesc }) => (
  <header css={{
      padding: rhythm(1),
      textAlign: 'center',
      '@media(min-width: 780px)' : {
        textAlign: 'left'
      }
    }}>
      {/* <h1 style={{ margin: '0 0 5px 0' }}>
        <span css={{ display: `block`, color: theme.colors.primary }}>{siteTitle}</span>
        <span css={{ display: `block`, color: theme.colors.text, fontSize: rhythm(1.05) }}>{jobDesc}</span>
      </h1> */}
      
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