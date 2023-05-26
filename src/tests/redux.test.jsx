// import { useSelector } from "react-redux";
import reducer, { changeBox } from "../redux/memesSlice/memesSlice";
import { it, expect, describe } from "vitest";

// const box = useSelector((state) => state.meme.box);
describe("redux", () => {
  it("changes box value", () => {
    const state = {
      memes: [],
      isLoading: false,
      box: 0,
    };
    expect(reducer(state, changeBox(5))).toEqual({
      memes: [],
      isLoading: false,
      box: 5,
    });
  });
});
