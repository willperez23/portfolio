import React, { useEffect } from 'react';
import '../styling/inforest.scss';
import ProjectTitle from './projectTitle';

const inforest = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="portfolioFlex">
      <ProjectTitle
        name="InForest"
        timeline="10 weeks"
        purpose="As a language learning platform, BeepBoop
        relies heavily on the teacher to student
        interaction. Beepboop is in the process
        of creating their MVP web/mobile platform
        for their students and instructors, easing
        the teaching process and consolidating all
        of BeepBoop’s user data."
        color="greenText"
        team={(
          <p>Josh Vorbrich - Designer <br />
            Ardelle - Designer <br />
            William Perez - Design Mentor<br />
            Catherine Cooney, Project Manager<br />
            Ziray Hao, Developer<br />
            Julian George, Developer Mentor
          </p>
          )}
        tag1="Tablet"
        tag2="Research"
        tag3="Data Visuals"
        tag4="Trees"
        tag5="Maps"
        tagStyling="inforestTag"
      />
      <div className="horizontalFlex spacebtwn btmSpacer">
        <div className="left-spacer">
          <h3 className="greenText">The Challenge</h3>
          <p className="smaller">Forestry researchers work to better understand the dynamics that shape
            forests around the globe.  However, the process of censusing trees in forest plots is currently
            inefficient and inaccurate. Researchers must manually record metrics on each tree and then transfer
            this data onto the computer in the lab.  This process is tedious and leaves room for error in data collection and input.
          </p>
        </div>
        <div className="right-spacer">
          <h3 className="greenText">Joining the Team</h3>
          <p className="smaller">Forestry researchers work to better understand the dynamics that shape
            forests around the globe.  However, the process of censusing trees in forest plots is currently
            inefficient and inaccurate. Researchers must manually record metrics on each tree and then transfer
            this data onto the computer in the lab.  This process is tedious and leaves room for error in data collection and input.
          </p>
        </div>
      </div>

      <div className="green btmSpacer">
        <h2 className="bold left ">HMW enable and empower researchers in their work towards a more comprehensive view of global forest health?</h2>
      </div>
    </div>
  );
};
export default inforest;
