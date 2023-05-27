import "./Categories.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeBox } from "../../redux/memesSlice/memesSlice";
import Category from "../Category/Category";

const Categories = () => {
  const dispatch = new useDispatch();
  const clickHandler = (e) => {
    dispatch(changeBox(e.target.id));
  };
  const categoriesArray = useSelector((state) => state.meme.categoriesArray);
  return (
    <div className="categories-container">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
          flexWrap: "wrap",
          gap: 40,
          paddingTop: 10,
        }}
      >
        {categoriesArray.map((category) => (
          <li key={Category.itemId}>
            <Category
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
