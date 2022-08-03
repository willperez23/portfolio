import React from 'react';
import { NavLink } from 'react-router-dom';
import portfolio from '../img/portfolio.svg';
import downArrow from '../img/downArrow.svg';
import greenLeft from '../img/greenLeft.svg';
import blueLeft from '../img/blueLeft.svg';
import purpleLeft from '../img/purpleLeft.svg';
import orangeLeft from '../img/orangeLeft.svg';
import Inforest from '../img/InForest Mockups.svg';
import GreekNav from '../img/GreekNav Mockups.svg';
import BetMate from '../img/BetMate Mockups.svg';
import BeepBoop from '../img/BeepBoop Mockups.svg';
import FosterFeedFreinds from '../img/FFF Mockups.svg';
import Polaris from '../img/Polaris Mockups.svg';
import '../styling/portfolio.scss';

const Portfolio = (props) => {
  return (
    <div id="portfolioFlex">
      <div className="horizontalFlex spacebtwn" id="portFlex">
        <div className="portfolioText" id="title">
          <h1>My Portfolio</h1>
          <p>From this website, to web, tablet, and mobile applications. I have taken on many roles. I’m estatic to share my insights and final deliverables with you :))</p>

          <img src={downArrow} className="jump" id="downArrow" alt="down arrow" />

        </div>

        <img className="portfolioImg" src={portfolio} alt="animated will in front of a computer" />

      </div>

      <div className="horizontalFlex spacebtwn sectionFlex">
        <div className="sectionText left">
          <h1 className="greenText">InForest</h1>
          <h2 className="projectRole">Product Designer + Mentor </h2>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="additionalInfo">March 2022</p>
            <div className="greenTag">Tablet</div>
          </div>
          <p className="description"> In partnership with Agroecologist Professor Ong,
            Inforest digitalizes the forest data collecting
            process for research conducted at Dartmouth’s
            Organic Farm. This teaching tool allows to bring
            the environmental studies courses out of the classroom
            and into the woods for hands-on expereince.
          </p>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="description bold">View Case Study </p>
            <a href="https://fosterfeedfriends.netlify.app/">
              <img src={greenLeft} className="zeroMargin" id="leftArrow" alt="green left arrow" />
            </a>
          </div>
        </div>
        <img className="mockups" src={Inforest} alt="animated will in front of a computer" />
      </div>

      <div className="horizontalFlex spacebtwn sectionFlex">
        <img className="mockups " src={GreekNav} alt="GreekNav Mockup Screens" />
        <div className="sectionText right">
          <h1 className="purpleText">GreekNav</h1>
          <h2 className="projectRole">Front End Developer  </h2>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="additionalInfo">Feb 2021</p>
            <div className="purpleTag">Mobile</div>
          </div>
          <p className="description"> Dartmouth’s Greek recruitment process is
            intimidating and daunting. GreekNav is an Android app that aims to
            bring transparency to the recruitment process and create an open
            and inclusive platform for potenital new members to engage with each
            other and the Greek houses on campus,
          </p>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="description bold">View Case Study </p>
            <a className="casestudybutton" href="src/files/GreekNavFinalDemo.apk" download>
              <img src={purpleLeft} className="zeroMargin" id="leftArrow" alt="purple left arrow" />
            </a>
          </div>
        </div>
      </div>

      <div className="horizontalFlex spacebtwn sectionFlex">
        <div className="sectionText left">
          <h1 className="blueText">BetMate</h1>
          <h2 className="projectRole">Product Designer </h2>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="additionalInfo">June 2021</p>
            <div className="blueTag">Web</div>
          </div>
          <p className="description">With the rise of chess interest after
            Netflix’s The Queen’s Gambit, BetMate aims to capitalize on the
            chess interest through a chess specific betting platform, offering
            a new way of engaging with chess matches through betting on each
            move and outcomes of each match.
          </p>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="description bold">View Case Study </p>
            <NavLink to="/betMate">
              <img src={blueLeft} className="zeroMargin" id="leftArrow" alt="green left arrow" />
            </NavLink>
          </div>
        </div>
        <img className="mockups right" src={BetMate} alt="BetMate Mockup Screens" />
      </div>

      <div className="horizontalFlex spacebtwn sectionFlex">
        <img className="mockups " src={BeepBoop} alt="BeepBoop Mockup Screens" />
        <div className="sectionText right">
          <h1 className="orangeText">BeepBoop</h1>
          <h2 className="projectRole">UI/UX Designer</h2>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="additionalInfo">Feb 2021</p>
            <div className="orangeTag">Mobile</div>
          </div>
          <p className="description"> BeepBoop is a language learning platform focused
            on improving user pronunciation. This company aims to adapt a version of
            language learning at Dartmouth. I worked on designing the general platform
            to be used across mulitple devices.
          </p>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="description bold">View Case Study </p>
            <NavLink to="/beepBoop">
              <img src={orangeLeft} className="zeroMargin" id="leftArrow" alt="green left arrow" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="horizontalFlex spacebtwn sectionFlex">
        <div className="sectionText left">
          <h1 className="greenText">Foster Feed Friends</h1>
          <h2 className="projectRole">Full Stack Developer</h2>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="additionalInfo">June 2021</p>
            <div className="greenTag">Web</div>
          </div>
          <p className="description"> There is a systemic lack of support
            for the foster youth of America. FosterFeedFreinds aims to bridge
            a large gap of support for these youth as they prepare to age of
            a broken system, offering them access to mentors and organizations
            willing to help them succeed.
          </p>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="description bold">View Case Study </p>
            <NavLink to="/inForest">
              <img src={greenLeft} className="zeroMargin" id="leftArrow" alt="green left arrow" />
            </NavLink>
          </div>
        </div>
        <img className="mockups" src={FosterFeedFreinds} alt="animated will in front of a computer" />
      </div>

      <div className="horizontalFlex spacebtwn sectionFlex">
        <img className="mockups right" src={Polaris} alt="Polaris Mockup Screens" />
        <div className="sectionText right">
          <h1 className="purpleText">Polaris</h1>
          <h2 className="projectRole">UI/UX Designer</h2>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="additionalInfo">March 2020</p>
            <div className="purpleTag">Mobile</div>
          </div>
          <p className="description"> In the age of Zoom,
            college students have placed a pause on their mental
            health. Polaris aims to provide incentive to acheive
            personal goals, motivational quotes, as well as a
            journaling self-reflection component.
          </p>
          <div className="horizontalFlex verticalAlign additionalInfo">
            <p className="description bold">View Case Study </p>
            <NavLink to="/betMate">
              <img src={purpleLeft} className="zeroMargin" id="leftArrow" alt="purple left arrow" />
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
