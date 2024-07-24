import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url =
  'https://list-of-all-countries-and-languages-with-their-codes.p.rapidapi.com/languages';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_LANG_API_KEY,
    'x-rapidapi-host':
      'list-of-all-countries-and-languages-with-their-codes.p.rapidapi.com',
  },
};

//Actions

export const getAllLanguages = createAsyncThunk('allLanguages', async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

// Slices

const getAllLanguagesSlice = createSlice({
  name: 'allLanguages',
  initialState: {
    isLoading: false,
    list: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllLanguages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllLanguages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(getAllLanguages.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default getAllLanguagesSlice.reducer;
