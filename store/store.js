import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers/index';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: reducers,
  middleware: [thunk],
});
