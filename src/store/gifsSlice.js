import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL, API_KEY } from "../utils/constants";

export const getSearchGifs = createAsyncThunk('gifs/getSearchGifs', async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${query}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
})

const gifsSlice = createSlice({
  name: 'gifs',
  initialState: { isLoading: false },
  reducers: {},
  extraReducers: {
    [getSearchGifs.pending](state) {
      state.isLoading = true
    },
    [getSearchGifs.fulfilled](state) {
      state.isLoading = false
    },
    [getSearchGifs.rejected](state) {
      state.isLoading = false
    }
  }
})

export default gifsSlice.reducer
