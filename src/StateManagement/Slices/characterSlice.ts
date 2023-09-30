import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";
import {
    CharacterRecordType,
    CharacterStateType,
} from "../../InterfaceAndTypes/characterType";

// Initial state for characterSlice
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
    profileRecord: {
        series: [{ title: "" }],
        comics: [{ title: "" }],
    },
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

        setProfileRecord: (
            state: CharacterStateType,
            action: PayloadAction<{
                comicRecords: [{ title: string }];
                seriesRecords: [{ title: string }];
            }>
        ) => {
            const { comicRecords, seriesRecords } = action.payload;
            return {
                ...state,
                profileRecord: {
                    series: seriesRecords,
                    comics: comicRecords,
                },
            };
        },

        // Sets the index of data to be shown in bar chart
        setSelectedRecordsIndex: (
            state: CharacterStateType,
            action: PayloadAction<number[] | null>
        ) => {
            let updatedSelectedRecordsIndex;

            if (action.payload) {
                const indicesToRemove = action.payload.filter((item) =>
                    state.selectedRecordsIndex.includes(item)
                );
                updatedSelectedRecordsIndex = state.selectedRecordsIndex
                    .filter((item) => !indicesToRemove.includes(item))
                    .concat(
                        action.payload.filter(
                            (item) => !indicesToRemove.includes(item)
                        )
                    );
                // }
            }
            // If changing page
            else {
                updatedSelectedRecordsIndex = [0];
            }

            return {
                ...state,
                selectedRecordsIndex: updatedSelectedRecordsIndex,
            };
        },
    },
};

const characterSlice = createSlice(characterOptions);
export const {
    setCharacterDetails,
    setSelectedRecordsIndex,
    setProfileRecord,
} = characterSlice.actions;
export default characterSlice.reducer;
