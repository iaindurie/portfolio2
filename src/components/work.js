import PropTypes from "prop-types"
import React, { Component } from "react"
import theme from './../utils/variables'
import { StaticQuery } from "gatsby"
import WorkItem from './work-item'
import  { rhythm } from './../utils/typography'
import VisibilitySensor from "react-visibility-sensor";

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerInView: true
    };
  }




  render() {
      const data = this.props.projects;

      function onChange (isVisible) {
          if(isVisible === true) {
            document.body.classList.add('visible');
          } else {
            document.body.classList.remove('visible')
          }
        }

      return (
        <div>
  
        <WorkItem
        title="Avail"
        page="avail"
        type="Mobile app"
        mainPic={data.mainAvail}
        alt="Avail app screenshot"
        critical="true" />

        <WorkItem
          title="EasyCare Respond"
          type="Web app"
          page="easycare"
          mainPic={data.mainEasyCare}
          alt="respond app screenshot"
          critical="true" />

        <WorkItem
        title="Ringtons"
        type="Mobile app"
        page="ringtons"
        mainPic={data.mainRingtons}
        alt="Ringtons app screenshot"
        critical="true" />

        <WorkItem
        title="Bloom"
        type="Sign in experience"
        page="bloom"
        mainPic={data.mainBloom}
        alt="Bloom sign in"
        critical="true" />

        <WorkItem
        title="SK Chase"
        type="Website theme"
        page="skchase"
        mainPic={data.mainSK}
        alt="Ringtons app screenshot"
        critical="true" />

        <VisibilitySensor onChange={onChange}>
          <span aria-hidden="true" css={{position:'absolute', top:'120px', left:'0'}}>&nbsp;</span>
        </VisibilitySensor>

        <WorkItem
        title="Perfect Image / BI"
        type="Website"
        page="perfect-image-bi"
        mainPic={data.mainBI}
        alt="Respond app screenshot"
        critical="true" />

    </div>
      )
  }
}

export default Work

