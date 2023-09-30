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
};

const characterOptions: CreateSliceOptions = {
    name: "character",
    initialState,
    reducers: {
        setCharacterDetails: (
            state: CharacterStateType,
            action: PayloadAction<[CharacterRecordType]>
        ) => {
            return {
                records: [...action.payload],
            };
        },
    },
};

const characterSlice = createSlice(characterOptions);
export const { setCharacterDetails } = characterSlice.actions;
export default characterSlice.reducer;
