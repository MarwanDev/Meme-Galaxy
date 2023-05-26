/* eslint-disable no-unused-vars */
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";
import propTypes from "prop-types";
import "./Navbar.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const Navbar = ({ isDetailPage, pageTitle }) => {
  const displayArrow = () => (
    <Link to="/" style={{textDecoration: 'none', border: 'none', backgroundColor: '#4369b2', paddingTop: 3}}>
      <ArrowBackIosNewIcon
        style={{ color: "#fff", backgroundColor: "#4369b2" }}
      />
    </Link>
  );
  const displayMenu = () => (
    <MenuIcon style={{ color: "#fff", backgroundColor: "#4369b2" }} />
  );
  return (
    <nav className="navbar-container">
      {isDetailPage && displayArrow()}
      {!isDetailPage && displayMenu()}
      <h1
        style={{
          color: "#fff",
          fontSize: 18,
          margin: "auto",
          alignSelf: "center",
          textAlign: "center",
          backgroundColor: "#4369b2",
        }}
      >
        {pageTitle}
      </h1>
      <MicIcon
        style={{
          color: "#fff",
          marginLeft: "auto",
          backgroundColor: "#4369b2",
        }}
      />
      <SettingsIcon style={{ color: "#fff", backgroundColor: "#4369b2" }} />
    </nav>
  );
};

Navbar.propTypes = {
  isDetailPage: propTypes.bool,
  pageTitle: propTypes.string,
};

Navbar.defaultProps = {
  isDetailPage: false,
  pageTitle: "all memes stat",
};

export default Navbar;
