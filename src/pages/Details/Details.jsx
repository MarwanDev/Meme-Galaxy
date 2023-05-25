import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMemes } from "../../redux/memesSlice/memesSlice";
import "./Details.scss";

const Details = () => {
  let box = useSelector((state) => state.meme.box);
  const memes = useSelector((state) => state.meme.memes);
  const { isLoading, error } = useSelector((state) => state.meme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemes());
  }, [dispatch]);
  if (isLoading) return <h4 style={{ textAlign: "center" }}>Loading...</h4>;

  if (error) return <h5 style={{ textAlign: "center" }}>Error!!</h5>;
  console.log(box);
  let filteredMemes =
    box == 0 ? memes : memes.filter((meme) => meme.box_count == box);
  console.log(filteredMemes);
  return (
    <React.Fragment className="cards-container">
      {filteredMemes.map((meme) => (
        <div key={meme.id} className="meme-container">
          <p className="meme-name">{meme.name}</p>
          <img src={meme.url.replace(/\\/g, "")} alt="Thumbnail" />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Details;
