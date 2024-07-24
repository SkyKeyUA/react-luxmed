import { configureStore, combineReducers } from '@reduxjs/toolkit';
import languageReducer from './Slices/getAllLanguagesSlice';
import optionsReducer from './Slices/getSelectedOptionsSlice';

const rootReducer = combineReducers({
  allLanguages: languageReducer,
  selectedOptions: optionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
