import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.imgflip.com/get_memes";

export const fetchMemes = createAsyncThunk(
  "memes/fetchMemesFromAPI",
  async () => {
    const res = await axios.get(API_URL);
    return res.data.data.memes;
  }
);

const initialState = {
  memes: [],
  box: 0,
  isLoading: false,
  error: null,
};

export const memesSlice = createSlice({
  name: "meme",
  initialState,
  reducers: {
    changeBox: (state, action) => {
      state.box = action.payload;
      console.log(state.box);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMemes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMemes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const memesList = [];
      payload.map((meme) =>
        memesList.push({
          id: meme.id,
          name: meme.name,
          url: meme.url,
          box_count: meme.box_count,
        })
      );
      state.memes = memesList;
    });
    builder.addCase(fetchMemes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default memesSlice.reducer;
export const showMemes = (state) => state.meme.memes;
export const { changeBox } = memesSlice.actions;
