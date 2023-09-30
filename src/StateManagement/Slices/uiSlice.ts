import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import { uiModalType, uiStateType } from "../../InterfaceAndTypes/uiTypes";

// Initial state for characterSlice
const initialState: uiStateType = {
    isLoaded: false,
    modal: {
        isOpen: false,
        content: "",
        type: "",
    },
};

const uiOptions: CreateSliceOptions = {
    name: "table",
    initialState,
    reducers: {
        setModal: (state: uiStateType, action: PayloadAction<uiModalType>) => {
            const { isOpen, content, type } = action.payload;
            return {
                ...state,
                modal: {
                    isOpen,
                    content,
                    type,
                },
            };
        },

        setIsLoaded: (state: uiStateType, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isLoaded: action.payload,
            };
        },
    },
};

const uiSlice = createSlice(uiOptions);
export const { setIsLoaded, setModal } = uiSlice.actions;
export default uiSlice.reducer;
