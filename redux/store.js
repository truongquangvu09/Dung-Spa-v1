import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // filters: filterReducer,
    },
});
export default store;
