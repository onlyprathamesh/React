import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.color}`}>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary" style={`background-color: ${props.color}`}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:`${props.color}`}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.text}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="dropdown mx-4">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Custom Theme
            </button>
            <ul className="dropdown-menu">
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="listGroupRadio" onClick={props.setTheme} value="" id="1" />
                <label className="form-check-label" htmlFor="1">Dark</label>
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="2" />
                <label className="form-check-label" htmlFor="2">Light</label>
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio"  name="listGroupRadio" value="" id="3" />
                <label className="form-check-label" htmlFor="3">Red</label>
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="4" />
                <label className="form-check-label" htmlFor="4">Blue</label>
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="5" />
                <label className="form-check-label" htmlFor="5">Yellow</label>
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="6" />
                <label className="form-check-label" htmlFor="6">Pink</label>
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="7" />
                <label className="form-check-label" htmlFor="7">Green</label>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label mx-2" htmlhtmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  text: "Text here",
  about: "about here",
};
