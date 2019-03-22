import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from './header'
import Footer from './footer'
import "./layout.css"


export default ({ children }) => (
  <div>
   
      <main css={{minHeight:'100vh'}}>
        {children}
      </main>
    <Footer />
  </div>
)