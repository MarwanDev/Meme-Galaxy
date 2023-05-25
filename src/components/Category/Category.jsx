/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ itemId, name, thumbnail, onClick }) => {
  return (
    <div
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      href=""
      id={itemId}
      onClick={onClick}
    >
      <NavLink to="/details" id={itemId} onClick={onClick} style={{ fontSize: 60, textDecoration: 'none' }}>
        {thumbnail}
      </NavLink>
      <h6 style={{ textDecoration: "none", color: "#fff" }}>{name}</h6>
    </div>
  );
};

Category.defaultProps = {
  itemId: null,
  name: "",
  thumbnail: "",
  onClick: "",
};

Category.propTypes = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  onClick: PropTypes.func,
};

export default Category;
