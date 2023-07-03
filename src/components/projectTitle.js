import React, { useEffect } from 'react';

const ProjectTitle = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="horizontalFlex spacebtwn btmSpacer">
      {console.log(props)}
      <div className="sectionText left alignTop">
        <h1 className="greenText">{props.name}</h1>
        <h2>Case Study </h2>
        {console.log('made')}
        <div className="eighty">
          <h3>Purpose:</h3>
          <p className="smaller">{props.purpose}
          </p>
        </div>
        <div className="eighty">
          <h3>Timeline:</h3>
          <p className="smaller">{props.timeline}</p>
        </div>
        <div className="eighty">
          <h3>Team:</h3>
          <p className="smaller">{props.team}
          </p>
        </div>
        <div className="eighty">
          <h3>Tags:</h3>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <div className={props.tagStyling}>{props.tag1}</div>
            <div className={props.tagStyling}>{props.tag2}</div>
            <div className={props.tagStyling}>{props.tag3}</div>
            <div className={props.tagStyling}>{props.tag4}</div>
            <div className={props.tagStyling}>{props.tag5}</div>
          </div>
        </div>
      </div>
      <img className="mockups " src={props.imgSrc} alt="mockup" />
    </div>
  );
};

export default ProjectTitle;
