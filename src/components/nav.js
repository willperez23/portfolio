import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import resume from '../files/perez_william_resume.pdf';
// import { saveAs } from 'file-saver';
import '../styling/nav.scss';

const Nav = (props) => {
  // const saveFile = () => {
  //   saveAs(
  //     'src/files/perez_william_resume.pdf',
  //     'will_perez_resume.pdf',
  //   );
  // };

  return (
    <div id="navFlex">
      <nav>
        <NavLink to="/" className="brand">will pérez</NavLink>
        <span id="links">
          <NavLink to="/about">about</NavLink>
          <NavLink to="/portfolio">portfolio</NavLink>
          <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ca0acd3f-b3a3-38e3-b3fe-2526b16efddb" target="_blank" rel="noopener noreferrer">
            <button id="resumeBtn" type="button">resume </button>
          </a>

        </span>
      </nav>
      <div className="divider" />
      {/* <div id="divider" /> */}
    </div>
  );
};

export default Nav;
