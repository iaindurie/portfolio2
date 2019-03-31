import React from "react"
import WorkItem from './work-item'
import  { rhythm } from './../utils/typography';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerInView: true
    };
  }




  render() {
    console.log("Rendering: MenuButton");
      const data = this.props.projects;

      // function onChange (isVisible) {
      //     if(isVisible === true) {
      //       document.body.classList.add('visible');
      //     } else {
      //       document.body.classList.remove('visible')
      //     }
      //   }

      return (
        <div css={{paddingTop:rhythm(2)}}>
  
        <WorkItem
          title="Avail"
          page="avail"
          type="Mobile app"
          mainPic={data.mainAvail}
          alt="Avail app screenshot"
          mobileMaxWidth="500px"
          critical="true"
          orientation="portrait" />

        <WorkItem
          title="EasyCare Respond"
          type="Web app"
          page="easycare"
          mainPic={data.mainEasyCare}
          alt="respond app screenshot"
          orientation="landscape" />

        <WorkItem
          title="Ringtons"
          type="Mobile app"
          page="ringtons"
          mainPic={data.mainRingtons}
          alt="Ringtons app screenshot"
          mobileMaxWidth="550px"
          orientation="portrait"  />

        <WorkItem
          title="Bloom"
          type="Sign-up experience"
          page="bloom"
          mainPic={data.mainBloom}
          alt="Bloom sign in"
          orientation="landscape" />

        <WorkItem
          title="SK Chase"
          type="Website theme"
          page="skchase"
          mainPic={data.mainSK}
          alt="Ringtons app screenshot"
          orientation="landscape" />

        <WorkItem
          title="Perfect Image / BI"
          type="Website"
          page="perfect-image-bi"
          mainPic={data.mainBI}
          alt="Respond app screenshot"
          orientation="landscape" />

    </div>
      )
  }
}

export default Work

