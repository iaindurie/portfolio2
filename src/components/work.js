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


  onHideHeader = (isVisible) => {
    if(isVisible) {
        document.body.classList.add('logo-switch');
    } else {
        document.body.classList.remove('logo-switch');
    }
  }

  render() {
      const data = this.props.projects;

      return (
        <div>
  
        <WorkItem
        title="Avail"
        type="Mobile app"
        mainPic={data.mainAvail}
        alt="Avail app screenshot"
        critical="true" />

        <VisibilitySensor onChange={this.onHideHeader}>
          <WorkItem
          title="EasyCare Respond"
          type="Web app"
          mainPic={data.mainRingtons}
          alt="respond app screenshot"
          critical="true" />
        </VisibilitySensor>

        <WorkItem
        title="Ringtons"
        type="Mobile app"
        mainPic={data.mainRingtons}
        alt="Ringtons app screenshot"
        critical="true" />

        <WorkItem
        title="SK Chase"
        type="Website theme"
        mainPic={data.mainRingtons}
        alt="Ringtons app screenshot"
        critical="true" />

        <WorkItem
        title="Perfect Image / BI"
        type="Website"
        mainPic={data.mainRingtons}
        alt="Respond app screenshot"
        critical="true" />

        <WorkItem
        title="Connect the Doc"
        type="Web app"
        mainPic={data.mainRingtons}
        alt="Connect the Doc app screenshot"
        critical="true" />

    </div>
      )
  }
}

export default Work

