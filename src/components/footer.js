import React from 'react';
import '../styling/footer.scss';
import github from '../img/github.svg';
import mail from '../img/mail.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin.svg';

const Footer = (props) => {
  return (
    <div id="footerFlex">
      <div className="divider" />
      <div className="horizontalFlex" id="footerSpace">
        <div id="leftFooter">
          <p className="brand footerp">will pérez</p>
          <div className="horizontalFlex" id="socials">
            <a href="mailto:will.perez2026@gmail.com"><img src={mail} alt="mail icon" /></a>
            <a href="https://www.linkedin.com/in/williamperez23/"><img src={linkedin} alt="linkedin icon" /></a>
            <a href="https://github.com/willperez23"><img src={github} alt="github icon" /></a>
            <a href="https://twitter.com/williamperez000"><img src={twitter} alt="twitter icon" /></a>
          </div>
        </div>
        <div id="rightFooter">
          <p className=" footerp">“People ignore designs that ignore people”</p>
          <p>— Frank Chimero</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
