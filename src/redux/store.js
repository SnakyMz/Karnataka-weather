import { configureStore } from '@reduxjs/toolkit';
import karnatakaReducer from './karnataka/karnatakaSlice';

const store = configureStore({
  reducer: {
    karnataka: karnatakaReducer,
  },
});

export default store;
