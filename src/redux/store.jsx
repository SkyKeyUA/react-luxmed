import { configureStore, combineReducers } from '@reduxjs/toolkit';
import languageReducer from './Slices/getAllLanguagesSlice';
import optionsReducer from './Slices/getSelectedOptionsSlice';
import aestheticReducer from './Slices/aestheticMedicineFormSlice';
import orthoReducer from './Slices/orthoMedicineFormSlice';

const rootReducer = combineReducers({
  allLanguages: languageReducer,
  selectedOptions: optionsReducer,
  aestheticForm: aestheticReducer,
  orthoForm: orthoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
