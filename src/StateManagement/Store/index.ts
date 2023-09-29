import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../Slices/characterSlice";

const store = configureStore({
    reducer: {
        character: characterSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
