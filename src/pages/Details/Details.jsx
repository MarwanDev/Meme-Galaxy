/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMemes } from "../../redux/memesSlice/memesSlice";
import "./Details.scss";
import { Navbar } from "../../components";

const Details = () => {
  let box = useSelector((state) => state.meme.box);
  const memes = useSelector((state) => state.meme.memes);
  const categoriesArray = useSelector((state) => state.meme.categoriesArray);
  const headerinfo = categoriesArray.filter((cat) => cat.itemId == box);
  const { isLoading, error } = useSelector((state) => state.meme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemes());
  }, [dispatch]);
  if (isLoading)
    return (
      <h4 style={{ textAlign: "center", margin: "auto", color: "#fff" }}>
        Loading...
      </h4>
    );

  if (error)
    return (
      <h5 style={{ textAlign: "center", margin: "auto", color: "#fff" }}>
        Error!!
      </h5>
    );
  let filteredMemes =
    box == 0 ? memes : memes.filter((meme) => meme.box_count == box);
  return (
    <>
    <Navbar isDetailPage pageTitle='memes list' />
      <div className="details-header">
        <h5 style={{ fontSize: 80, textDecoration: 'none', backgroundColor: '#5288e2' }}>{headerinfo[0].thumbnail}</h5>
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', backgroundColor: '#5288e2', color: '#fff' }}>
          <p style={{ backgroundColor: '#5288e2', fontSize: 20, marginLeft: 12 }}>{headerinfo[0].name}</p>
          <p style={{ backgroundColor: '#5288e2'}}>{filteredMemes.length} memes</p>
        </div>
      </div>
      <div className="cards-container">
        {filteredMemes.map((meme) => (
          <article key={meme.id} className="meme-container">
            <p className="meme-name">{meme.name}</p>
            <img src={meme.url.replace(/\\/g, "")} alt="Thumbnail" />
          </article>
        ))}
      </div>
    </>
  );
};

export default Details;
