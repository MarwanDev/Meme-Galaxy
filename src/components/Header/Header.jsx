/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMemes } from "../../redux/memesSlice/memesSlice";

const Header = () => {
  const memes = useSelector((state) => state.meme.memes);
  const { isLoading, error } = useSelector((state) => state.meme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemes());
  }, [dispatch]);
  if (isLoading) return <h4 style={{ textAlign: "center" }}>Loading...</h4>;

  if (error) return <h5 style={{ textAlign: "center" }}>Error!!</h5>;
  const categoriesNumber = () => {
    let boxCount = [];
    memes.map((meme) => {
      boxCount.push(meme.box_count);
    });
    return Math.max(...boxCount);
  };
  return (
    <div className="header-container">
      <h2
        style={{
          textAlign: "center",
          marginBottom: 15,
          color: "#fff",
          backgroundColor: "#4369b2",
        }}
      >
        memes stat
      </h2>
      <ul className="info-container">
        <li className="info">
          <h4>{memes.length}</h4>
          <h3>memes</h3>
        </li>
        <li className="info">
          <h4>{categoriesNumber()}</h4>
          <h3>categories</h3>
        </li>
        <li className="info">
          <h4>{categoriesNumber()}</h4>
          <h3>authors</h3>
        </li>
      </ul>
    </div>
  );
};

export default Header;
