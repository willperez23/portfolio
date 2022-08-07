import React from 'react';
import mockup from '../img/BetMate Mockups.svg';
import comepetitor from '../img/betMateCompetitor.svg';
import '../styling/betmate.scss';
import blueTarget from '../img/blueTarget.svg';
import blueChat from '../img/blueChat.svg';
import blueEye from '../img/blueEye.svg';
import blueExclamation from '../img/blueExclamation.svg';
import userJourney from '../img/betMateUserJourney.svg';
import sketches from '../img/betMateSketches.svg';
import greyscales from '../img/betMateGreyscales.svg';
import logos from '../img/betMateLogos.svg';
import hifi from '../img/betMateHifi.svg';
import finals from '../img/betMateFinals.svg';

const BetMate = (props) => {
  return (
    <div id="portfolioFlex">
      <div className="horizontalFlex spacebtwn btmSpacer">
        <div className="sectionText left">
          <h1 className="blueText">BetMate</h1>
          <h2>Case Study </h2>
          <div className="eighty">
            <h3>Purpose:</h3>
            <p className="smaller">When BetMate entered the DALI Lab, the project was just a concept.
              There was software for betting odds for moves and game matches; however, there did not exist a
              current interface for users. The DALI BetMate team was tasked with creating a web platform for
              users to fully bet on live chess games. The partners defined very broad and vague deliverables
              for the inital 10 week sprint.
            </p>
          </div>
          <div className="eighty">
            <h3>Timeline:</h3>
            <p className="smaller">10 weeks</p>
          </div>
          <div className="eighty">
            <h3>Team:</h3>
            <p className="smaller">Archita Harathi - Designer <br />
              William Perez - Designer <br />
              Wylie Kasai - Design Mentor
            </p>
          </div>
          <div className="eighty">
            <h3>Tags:</h3>
            <div className="horizontalFlex verticalAlign additionalInfo">
              <div className="betMateTag ">Web</div>
              <div className="betMateTag ">Chess</div>
              <div className="betMateTag ">Betting</div>
              <div className="betMateTag ">Gradient</div>
              <div className="betMateTag ">Dark UI</div>
            </div>
          </div>
        </div>
        <img className="mockups " src={mockup} alt="BeepBoop Mockup Screens" />
      </div>
      <div className="horizontalFlex  btmSpacer">
        <div className="left right">
          <h3 className="blueText">The Challenge</h3>
          <p className="smaller"> When BetMate entered the DALI Lab,
            the project was just a concept. There was software for betting odds for
            moves and game matches; however, there did not exist a current interface for users.
            The DALI BetMate team was tasked with creating a web platform for users to fully bet
            on live chess games. The partners defined very broad and vague deliverables for the inital 10 week sprint.
          </p>
        </div>
      </div>

      <div className="horizontalFlex odd btmSpacer">
        <div className="left-spacer">
          <h3 className="blueText">Competitor Research</h3>
          <p className="smaller">Kicking off our research stage, the design team conducted
            Although the chess and gambling markets are large, the interecting markets remain
            relatively open. Competitor research uncovered the large complexities of chess notation,
            betting metrics, and communicating data since the design team had limited expereince with both chess and betting.
          </p>
        </div>

        <div className="right-spacer">
          <img className="pushRight pushDown" src={comepetitor} alt="orange pencil" />
        </div>
      </div>

      <div className="horizontalFlex odd btmSpacer">
        <div className="left-spacer">
          <h3 className="blueText">Identifying our Users</h3>
          <p className=" smaller">The candidates given for the user interviews were primarily chess oriented. Though we got a deeper understanding of the needs of chess players of all
            levels, our research fell a bit short when it came to fully understanding betting. However, we leveraged our access to stakeholders and reached out to our partners for
            additional betting insights.
          </p>
          <p className=" smaller">
            From user interviews we were able to narrow down our persona to the intrigued amateur. Though we were compelled to cater to a competitive and exeprienced autdience, since Betmate
            is an up and coming platform we wanted to cater to as many audiences as possible.
          </p>
        </div>

        <div className="right-spacer">
          <h3 className="blueText">Pain Points</h3>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={blueExclamation} alt="orange pencil" />
            <p className=" smaller bold">Handwriting personalized notes for post-drill feedback. </p>
          </div>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={blueTarget} alt="orange target" />
            <p className="smaller bold">Identifying VIP members & distributing correction time accordingly </p>
          </div>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={blueEye} alt="orange calendar" />
            <p className=" smaller bold">Scheduling drill instructing lessons an selecting course topics </p>
          </div>
          <div className="horizontalFlex">
            <img className="pushRight pushDown" src={blueChat} alt="orange chat" />
            <p className=" smaller bold">Providing personalized post-drill feedback to each student  </p>
          </div>
        </div>

      </div>

      <div className="blue btmSpacer">
        <h2 className="bold left ">HMW create a simple user flow to solidify our main features while also encouraging engagement?</h2>
      </div>

      <div className="verticalFlex spacebtwn btmSpacer">
        <div className="left right">
          <h3 className="blueText">User Journey</h3>
          <p className="smaller">  We mapped out the user flow for the BetMate platform, breaking down users’ thoughts throughout every
            step primarily focused on the betting flow for users during a chess game and ensuring an enjoyable user experience.
          </p>
          <img className="pushRight pushDown" src={userJourney} alt="orange target" />
        </div>
      </div>
      <div className="verticalFlex spacebtwn btmSpacer verticalAlign">
        <div className="left right">
          <h3 className="blueText">Ideating and Iterating </h3>
          <p className="smaller">  To begin the ideation process for BetMate’s betting mechanism we utilized the Crazy 8 sketch technique. This design sprint method allowed
            the team to think of  innovating the structure and hierarchy in which we displayed the betting data to the user. I used a thick pencil brush on my iPad in order to
            avoid spending too much time on the finer details. Afterwards, I went back to annotate the core functionality of each sketch. The Crazy 8’s process is fun and messy.
            After dot voting as a team, we moved foward with the following crazy 8s:
          </p>
          <img className="pushRight pushDown" src={sketches} alt="orange target" />
        </div>
      </div>
      <div className="horizontalFlex btmSpacer">
        <div className="left-spacer">
          <h3 className="blueText">Betting Mechanism: A Closer Look</h3>
          <p className=" smaller">As we moved into grayscales, we began to run into understanding roadblocks betwen the move and game betting.
            The partners revealed that we had to seperate the current designs into two seperate betting componets: traditional betting for overall
            game betting & pool betting for specific move betting.
          </p>
          <p className=" smaller">
            The next point of discussion was getting feedback on the iterations of the betting flow. After recieving constructive feedback from designers
            in the lab, we decided to move forward with a token click. Since chess moves can range from a few seconds to mintues and possibly hours, the betting
            flow needed to minmize  the time needed to interact with the betting buttons per each chess move.
          </p>

        </div>

        <div className="right-spacer">
          <img className="pushRight pushDown" src={greyscales} alt="orange target" />

        </div>

      </div>

      <div className="horizontalFlex btmSpacer">
        <div className="left-spacer">
          <h3 className="blueText">Reflecting on Research </h3>
          <p className=" smaller"> Reflecting on the challenge of solidifying a solid UX for this chess betting project was an enormous feat as neither I nor my design partner and mentor
            had any chess or betting expereince. Though we struggled to understand the functionality of pool betting and house betting intitally, the mulitple iterations that followed
            clearly targeted the pain points of users (limited time, knowledge of chess notation and betting odds, and being overwhelmed) while emphasizing a delightful user expereince.
            Asking for help and clarifying any confusion through detailed communcation with our partners was vital. Communication internally between my design partner, mentor, and I was
            crucial as I was new to the designer role in the lab.
          </p>
        </div>

        <div className="right-spacer">
          <h3 className="blueText">Logo Discussions </h3>
          <p className=" smaller">The partners brought forth a logo created by one of their partner’s. They had a personal attachment to the logo; however, it catered to the masculine
            dominated chess and betting field. In efforts to break away from those sterotypes, the design team presented a new version. After mulitple conversations and justifying the
            logo as a means of appealing to a broader audience, the partners agreed to adopt the new logo.
          </p>
          <img className="pushRight pushDown" src={logos} alt="BetMate Logos" />
        </div>
      </div>

      <div className="horizontalFlex btmSpacer">
        <div className="left-spacer">
          <h3 className="blueText">Rebranding</h3>
          <p className=" smaller"> Once we settles in with the logo change, this opened the door for a major changes to the user interface in regards to color. After curating a mood board,
            we began to explore two potential options: a neon and pastel option. After recieving feedback, we decided to move forward with the neon and gradient focused designs because it created
            a more cohesive style with the dark UI. The other pastel graphic designs distracted the user from the main chess betting content.
          </p>
          <p>With the poopularity of emojicons as an extension of any language, we leveraged the use of emojis throughout the site’s designs. We didn’t want to completely immerse the user with these
            emoji’s, presenting the design team a challenge in regards to the in-app currency we presented to the user. Ultimately, we moved forward with the money bag emoji for consistency in style
            across the platform.
          </p>
        </div>

        <div className="right-spacer">
          <img className="pushRight pushDown" src={hifi} alt="orange pencil" />
        </div>
      </div>

      <div className="blue btmSpacer">
        <h2 className="bold left ">The visuals pair well with the engaging prompt of the platform. I will be using this for my own enjoyment.</h2>
      </div>

      <div className="btmSpacer left right">
        <h3 className="blueText">Reflecting on Research </h3>
        <p className="btmSpacer smaller"> Reflecting on the challenge of solidifying a solid UX for this chess betting project was an enormous feat as neither I nor my design partner and mentor
          had any chess or betting expereince. Though we struggled to understand the functionality of pool betting and house betting intitally, the mulitple iterations that followed
          clearly targeted the pain points of users (limited time, knowledge of chess notation and betting odds, and being overwhelmed) while emphasizing a delightful user expereince.
          Asking for help and clarifying any confusion through detailed communcation with our partners was vital. Communication internally between my design partner, mentor, and I was
          crucial as I was new to the designer role in the lab.
        </p>
        <img className="pushRight pushDown" src={finals} alt="final screens" />
      </div>

      <div className="verticalFlex center btmSpacer">
        <h2 className="bold">Check out the fully functional Figma prototype!</h2>
        <br />
        <iframe title="betmate prototype"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FkrxSy1SCHvKdubUXw4ZVES%2FBetMate-21X%3Fnode-id%3D1635%253A653"
          allowFullScreen
          className="marginBtm"
        />
      </div>

    </div>

  );
};

export default BetMate;
