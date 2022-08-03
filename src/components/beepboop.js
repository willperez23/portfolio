import React from 'react';
import mockup from '../img/BeepBoop Mockups.svg';
import orangePencil from '../img/orangePencil.svg';
import orangeTarget from '../img/orangeTarget.svg';
import orangeChat from '../img/orangeChat.svg';
import orangeCalendar from '../img/orangeCalendar.svg';
import mindMap from '../img/beepBoopMindMap.svg';
import sketches from '../img/beepBoopSketches.svg';
import navBar from '../img/beepBoopNavBar.svg';
import greyscales from '../img/beepBoopGreyscales.svg';
import hifi from '../img/beepBoopHiFi.svg';
import styleGuide from '../img/beepBoopStyleGuide.svg';
import future from '../img/beepBoopFuture.svg';
import '../styling/beepboop.scss';

const BeepBoop = (props) => {
  return (
    <div id="portfolioFlex">
      <div className="horizontalFlex spacebtwn btmSpacer">
        <div className="sectionText left">
          <h1 className="orangeText">BeepBoop</h1>
          <h2>Case Study </h2>
          <div className="eighty">
            <h3>Purpose:</h3>
            <p>As a language learning platform, BeepBoop
              relies heavily on the teacher to student
              interaction. Beepboop is in the process
              of creating their MVP web/mobile platform
              for their students and instructors, easing
              the teaching process and consolidating all
              of BeepBoop’s user data.
            </p>
          </div>
          <div className="eighty">
            <h3>Timeline:</h3>
            <p>10 weeks</p>
          </div>
          <div className="eighty">
            <h3>Team:</h3>
            <p>Salvatore Lupo - Designer <br />
              William Perez - Designer <br />
              Melissa Valencia - Designer <br />
              Devon Saliga - Company CEO
            </p>
          </div>
          <div className="eighty">
            <h3>Tags:</h3>
            <div className="horizontalFlex verticalAlign additionalInfo">
              <div className="beepBoopTag">Mobile</div>
              <div className="beepBoopTag">Light UI</div>
              <div className="beepBoopTag">Spanish</div>
              <div className="beepBoopTag">Startup</div>
              <div className="beepBoopTag">Education</div>
            </div>
          </div>
        </div>
        <img className="mockups " src={mockup} alt="BeepBoop Mockup Screens" />
      </div>
      <div className="horizontalFlex spacebtwn btmSpacer">
        <div className="left-spacer">
          <h3 className="orangeText">The Challenge</h3>
          <p>BeepBoop’s user interface relied on the Calendly
            and Zoom applications for the majority of the
            user flow. The design team was tasked with creating
            a mobile application for addressing the BeepBoop
            intructors user flows from selecting courses to
            leading in a lesson.
          </p>
        </div>
        <div className="right-spacer">
          <h3 className="orangeText">The Product</h3>
          <p>Established in 2019, BeepBoop aims to help users
            practice their Spanish pronunciacion through a series
            of increasingly challenging memory retention and
            pronunciation exercises. The proudct is influenced
            from pedagogical work pioneered at Dartmouth College
          </p>

        </div>
      </div>
      <div className="left-spacer right btmSpacer">
        <h3 className="orangeText">Talking to the Instructors</h3>
        <p>Kicking off our research stage, the design team conducted
          5 user interviews with drill instructors and the CEO. We
          synthesized our findings into key pain points for our users.
          Additionaly, the team created mindmaps targeting core instructors
          emotions. The team devloped a how might we question to guide the
          rest of the design process, highlighting the focus on establishing
          key functionality.
        </p>
      </div>
      <div className="horizontalFlex odd btmSpacer">
        <div className="left-spacer">
          <h3 className="orangeText">Pain Points</h3>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={orangePencil} alt="orange pencil" />
            <p className="bold">Handwriting personalized notes for post-drill feedback. </p>
          </div>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={orangeTarget} alt="orange target" />
            <p className="bold">Identifying VIP members & distributing correction time accordingly </p>
          </div>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={orangeCalendar} alt="orange calendar" />
            <p className="bold">Scheduling drill instructing lessons an selecting course topics </p>
          </div>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={orangeChat} alt="orange chat" />
            <p className="bold">Providing personalized post-drill feedback to each student  </p>
          </div>
        </div>
        <div className="right-spacer">
          <h3 className="orangeText pushDown">Mind Map</h3>
          <img src={mindMap} alt="mind map" />
        </div>

      </div>
      <div className="orange btmSpacer">
        <h2 className="bold left-spacer">HMW create a simple user flow to solidify our main features while also encouraging engagement?</h2>
      </div>
      <div className="horizontalFlex btmSpacer">
        <div className="left-spacer">
          <img src={sketches} alt="sketches" />
        </div>
        <div className="right-spacer">
          <h3 className="orangeText">Ideation - Crazy 8s</h3>
          <p>The each member of the design team sketched eight screens in eight minutes, depicting the main features:</p>
          <li>Profile page </li>
          <li>Live Drills - Video Streaming Page  </li>
          <li>Drill Course Catalog </li>
          <li>Course Dashboard </li>
          <p>As a team we used the dot voting method to identify the screens that we wanted to prototype keeping in mind the points for virality for the proudct </p>
        </div>
      </div>

      <div className="horizontalFlex verticalAlign btmSpacer">
        <div className="left-spacer">
          <h3 className="orangeText">Ideation - Crazy 8s</h3>
          <p>In an attempt to deviate from industry standard navigation bar, the team decided to play with rounded corners and centered on the live streaming aspect.
            We began with overlays as a way to decrease clicks need to reach other pages; however, after broader discussions we decided to set these pages as part of
            the navigation bar.
          </p>
          <div>
            <img src={navBar} alt="initial nav bar" />
          </div>
        </div>
        <div className="right-spacer">
          <img src={greyscales} alt="initial nav bar" />
        </div>
      </div>

      <div className="horizontalFlex verticalAlign btmSpacer">
        <div className="left-spacer">
          <h3 className="orangeText">Ideation - Crazy 8s</h3>
          <p>Quick user testing on the greyscales confirmed the direction in whcih the team moved forward for the high fidelity screens. As a team we divided
            the design work evenly, ensuring that we had the opportunity to collobarate on screens and ask for feedback throughout the process. After multiple
            scrapped screens we moved forward with testing versions of the the home, profile, and review screens:
          </p>
          <p>User testing showed that the core funcitoinality of the app served its purposel; however gave multiple insights into new directions and features
            that could be added later down the road.
          </p>
        </div>
        <div className="right-spacer">
          <img src={hifi} alt="initial nav bar" />
        </div>
      </div>

      <div className="orange btmSpacer">
        <h2 className="bold left-spacer">“Everything from scheduling, prep, teaching, and feedback is taken care of”</h2>
        <p className="left-spacer"> - Drill Instructor</p>
      </div>

      <div className="horizontalFlex btmSpacer">
        <div className="left-spacer">
          <h3 className="orangeText">Brand Identity</h3>
          <p>Being in such early stages of the start up, there was so much flexibility to take the company
            in any given direction. However, the design team focused on the user research and expereince portion
            of the sprint before entering in conversations about the brand and the interface components. The marketing
            team developed a brandbook that was then used to create the styling library for the sprint.
          </p>
        </div>
        <div className="right-spacer">
          <img src={styleGuide} alt="initial nav bar" />
        </div>
      </div>
      <div className="horizontalFlex">
        <div className="left-spacer">
          <h3 className="orangeText">Future Features</h3>
          <img src={future} className="scale" alt="initial nav bar" />
        </div>
        <div className="right">
          <h3 className="orangeText">Reflecting</h3>
          <p>Iterating on design is a necessary part of the process.
            Leaving this design sprint with BeepBoop, I am congizant
            that not every idea will be best for the user. The answers
            lie with the iusers. From user test, we quickly stear our
            unconventional navigation towards a traditional navigation bar.
            The user research aspect of the project created clear paths for the user
            interface. The visual designs in regards to color could be improved, but that
            is a direct result of poor communication between the marketing and design team.
            Nonetheless user advocacy is our primary focus as designers
          </p>
        </div>
      </div>
      <div className="verticalFlex center btmSpacer">
        <h2 className="bold"> Check out the fully functional Figma protype!</h2>
        <iframe
          title="beepboop figma"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPKaq52Q7MQch6vxgSkdC36%2FBeepboop-Copy%3Fnode-id%3D560%253A0"
          allowFullScreen
          className="marginBtm"
        />

      </div>

    </div>

  );
};

export default BeepBoop;
