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
            let updatedSelectedRecordsIndex;

            // If within same page
            if (action.payload) {
                // If selected all
                if (
                    action.payload.length === 20 &&
                    state.selectedRecordsIndex.length !== 20
                ) {
                    let numArray = [];
                    for (var i = 0; i < 20; i++) {
                        numArray.push(i);
                    }
                    updatedSelectedRecordsIndex = numArray;
                }
                // If deselected all
                else if (
                    action.payload.length === 20 &&
                    state.selectedRecordsIndex.length === 20
                ) {
                    updatedSelectedRecordsIndex = [0];
                }
                // If selected / deselected one
                else {
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
                }
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
export const { setCharacterDetails, setSelectedRecordsIndex } =
    characterSlice.actions;
export default characterSlice.reducer;
