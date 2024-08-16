import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebarSlice';


const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice,
  },
});

export default store;
