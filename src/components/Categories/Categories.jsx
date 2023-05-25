import "./Categories.scss";
import { useDispatch } from "react-redux";
import { changeBox } from "../../redux/memesSlice/memesSlice";
import Category from "../Category/Category";

const Categories = () => {
  const dispatch = new useDispatch();
  const clickHandler = (e) => {
    dispatch(changeBox(e.target.id));
  };
  const categoriesArray = [
    {
      itemId: 1,
      name: "Mr Basterma",
      thumbnail: "😂",
    },
    {
      itemId: 2,
      name: "Mr Bala7",
      thumbnail: "🤣",
    },
    {
      itemId: 3,
      name: "Mr Betengana",
      thumbnail: "🤡",
    },
    {
      itemId: 4,
      name: "Mrs Basterma",
      thumbnail: "😅",
    },
    {
      itemId: 5,
      name: "Mrs Bala7",
      thumbnail: "😎",
    },
    {
      itemId: 0,
      name: "All Memes",
      thumbnail: "🤑  ",
    },
  ];
  return (
    <div className="categories-container">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
          flexWrap: "wrap",
          gap: 70,
        }}
      >
        {categoriesArray.map((category) => (
          <li key={Category.itemId}>
            <Category
              // key={category.itemId + category.name}
              name={category.name}
              thumbnail={category.thumbnail}
              itemId={category.itemId}
              onClick={clickHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
