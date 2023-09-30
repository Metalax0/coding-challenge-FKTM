import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { uiStateType } from "../../InterfaceAndTypes/uiTypes";

// Initial state for characterSlice
const initialState: uiStateType = {
    isLoaded: false,
};

const uiOptions: CreateSliceOptions = {
    name: "table",
    initialState,
    reducers: {
        // Updates current page number (page to be shown)
        setIsLoaded: (state: uiStateType, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isLoaded: action.payload,
            };
        },
    },
};

const uiSlice = createSlice(uiOptions);
export const { setIsLoaded } = uiSlice.actions;
export default uiSlice.reducer;
