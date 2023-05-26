// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Category.scss";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Category = ({ itemId, name, thumbnail, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      href=""
      id={itemId}
      onClick={onClick}
      className="category-container"
    >
      <ArrowCircleRightOutlinedIcon style={{color: "#fff", textAlign: 'end', alignSelf: 'flex-end'}} />
      <NavLink
        to="/details"
        id={itemId}
        onClick={onClick}
        style={{ fontSize: 60, textDecoration: "none" }}
      >
        {thumbnail}
      </NavLink>
      <h6 style={{ textDecoration: "none", color: "#fff", textAlign: 'right', alignSelf: 'flex-end', marginTop: 4 }}>{name}</h6>
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
