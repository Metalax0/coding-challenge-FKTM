import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import {
    CharacterRecordType,
    CharacterStateType,
} from "../../InterfaceAndTypes/characterType";

const initialState: CharacterStateType = {
    records: [
        {
            id: 0,
            name: "Loading...",
            description: "Loading...",
            thumbnail: { extension: "", path: "" },
            comics: null,
            series: null,
        },
    ],
    selectedRecordsIndex: [0],
};

const characterOptions: CreateSliceOptions = {
    name: "character",
    initialState,
    reducers: {
        // All character records are stored here
        setCharacterDetails: (
            state: CharacterStateType,
            action: PayloadAction<[CharacterRecordType]>
        ) => {
            return {
                ...state,
                records: [...action.payload],
            };
        },

        // Sets the index of data to be shown in bar chart
        setSelectedRecordsIndex: (
            state: CharacterStateType,
            action: PayloadAction<number[] | null>
        ) => {
            return {
                ...state,
                selectedRecordsIndex: action.payload
                    ? [...state.selectedRecordsIndex, ...action.payload]
                    : [0],
            };
        },
    },
};

const characterSlice = createSlice(characterOptions);
export const { setCharacterDetails, setSelectedRecordsIndex } =
    characterSlice.actions;
export default characterSlice.reducer;
