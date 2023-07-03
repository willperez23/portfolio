import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/landing.scss';
import Typewriter from 'typewriter-effect';
import landing from '../img/Landing.svg';
import arrow from '../img/Arrow.svg';

const Landing = (props) => {
  return (
    <div id="landingFlex">
      <div id="landingText">
        <h1>Hello! I’m <br />
          William Pérez
        </h1>
        <h2>
          <Typewriter
            options={{
              strings: ['Product Designer', 'UI/UX Designer', 'Full Stack Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p>Incoming Associate Product Designer @MongoDB </p>

        <p className="zero"> Working to bring products from:   </p>
        <div className="zero" id="code2Figma">
          <p>Idea</p>
          <img src={arrow} alt="arrow" />
          <p>Figma</p>
          <img src={arrow} alt="arrow" />
          <p>Code</p>
        </div>
        <div className="btmSpacer" />
        <div className="horizontalFlex" id="ctas">
          <a href="mailto:will.perez2026@gmail.com" id="blkBtn">Email Me! &#128231;</a>
          <NavLink id="portfolioLink" to="/porfolio">Portfolio</NavLink>
        </div>
      </div>
      <div id="landingImgFlex">
        <img src={landing} alt="animated will with thumbs up" />

      </div>
    </div>
  );
};

export default Landing;
