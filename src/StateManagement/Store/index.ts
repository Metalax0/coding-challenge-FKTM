import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../Slices/characterSlice";
import tableSlice from "../Slices/tableSlice";
import uiSlice from "../Slices/uiSlice";

const store = configureStore({
    reducer: {
        character: characterSlice,
        table: tableSlice,
        ui: uiSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
