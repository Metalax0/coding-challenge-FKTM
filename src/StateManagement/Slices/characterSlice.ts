import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import {
    CharacterRecordType,
    CharacterStateType,
} from "../../InterfaceAndTypes/characterTypes";

const initialState: CharacterStateType = {
    records: [
        {
            comics: null,
            description: "",
            events: null,
            id: 0,
            modified: "",
            name: "",
            resourceURI: "",
            series: null,
            stories: null,
            thumbnail: null,
            urls: null,
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
