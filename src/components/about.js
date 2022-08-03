import React from 'react';
import '../styling/about.scss';
import about from '../img/about.svg';

const About = (props) => {
  return (
    <div id="aboutFlex">
      <img src={about} id="aboutImg" alt="animated will with waving" />
      <div>
        <h1>At a glance ...</h1>
        <div id="aboutText">
          <div className="horizontalFlex center">
            <div className="circle">&#127754;</div>
            <div>
              <p className="Blue">I am a Southern California native. </p>
              <p className="subText">I bounce between Orange County and Los Angeles. You can find me at the beach, In-N-Out, or the public library.</p>
            </div>

          </div>

          <div className="horizontalFlex center">
            <span className="circle" id="tree">&#127794;</span>
            <div>
              <p className="Green">I am senior at Dartmouth.</p>
              <p className="subText">I study Computer Science modified with Human-Centered Design and minoring in Latin American and Caribbean Studies.</p>
            </div>

          </div>

          <div className="horizontalFlex center">
            <span className="circle" id="door">&#128682;</span>
            <div>
              <p className="Orange">I love opening doors.</p>
              <p className="subText">As a queer first-generation student of color, I wish to bridge gaps of information by building networks of communities. </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
