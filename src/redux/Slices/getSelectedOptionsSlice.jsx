import { createSlice } from '@reduxjs/toolkit';

const getSelectedOptionsSlice = createSlice({
  name: 'selectedOptions',
  initialState: {
    options: [],
    error: false,
  },
  reducers: {
    clearOptions: (state) => {
      state.options = [];
    },
    removeOption: (state, action) => {
      const option = action.payload;
      const isEqual = (item) => item === option;
      const optionId = state.options.findIndex(isEqual);

      state.options.splice(optionId, 1);
    },
    toggleOption: (state, action) => {
      const newOption = action.payload;
      const isEqual = (item) => item === newOption;
      const index = state.options.findIndex(isEqual);

      if (index === -1) {
        state.options.push(newOption);
      } else if (index >= 0) {
        state.options.splice(index, 1);
      } else {
        state.error = true;
      }
    },
  },
});

export const { clearOptions, removeOption, toggleOption } =
  getSelectedOptionsSlice.actions;

export default getSelectedOptionsSlice.reducer;
