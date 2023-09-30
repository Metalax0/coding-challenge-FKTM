import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { TableStateType } from "../../InterfaceAndTypes/tableType";

// Initial state for characterSlice
const initialState: TableStateType = {
    activePage: 1,
};

const tableOptions: CreateSliceOptions = {
    name: "table",
    initialState,
    reducers: {
        // Updates current page number (page to be shown)
        setActivePage: (
            state: TableStateType,
            action: PayloadAction<number>
        ) => {
            return {
                ...state,
                activePage: action.payload,
            };
        },
    },
};

const tableSlice = createSlice(tableOptions);
export const { setActivePage } = tableSlice.actions;
export default tableSlice.reducer;
