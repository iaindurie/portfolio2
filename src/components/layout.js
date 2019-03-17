import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from 'header'
import Footer from 'footer'
import "./layout.css"


export default ({ children }) => (
  <div style={{
      margin: `3rem auto`,
      maxWidth: 650,
      padding: `0 1rem` }}>


    {children}
  </div>
)