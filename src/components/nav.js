import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { saveAs } from 'file-saver';
import '../styling/nav.scss';

const Nav = (props) => {
  const saveFile = () => {
    saveAs(
      'src/files/perez_william_resume.pdf',
      'will_perez_resume.pdf',
    );
  };

  return (
    <div id="navFlex">
      <nav>
        <NavLink to="/" className="brand">will pérez</NavLink>
        <span id="links">
          <NavLink to="/about">about</NavLink>
          <NavLink to="/portfolio">portfolio</NavLink>
          <button id="resumeBtn" type="button" onClick={saveFile}>resume </button>
        </span>
      </nav>
      <div className="divider" />
      {/* <div id="divider" /> */}
    </div>
  );
};

export default Nav;
