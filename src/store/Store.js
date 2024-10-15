import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../redux/fetures/jobsSlice/jobsSlice';
export const store = configureStore({
    reducer: {
        transaction:jobsReducer,
    },
});
