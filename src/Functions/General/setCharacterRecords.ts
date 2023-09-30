import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import {
    setCharacterDetails,
    setProfileRecord,
} from "../../StateManagement/Slices/characterSlice";
import { fetchAllRecords } from "../API/fetchAllRecords";
import { fetchComicById } from "../API/fetchComicById";
import { fetchSeriesById } from "../API/fetchSeriesById";
import { fetchRecordsByName } from "../API/fetchRecordsByName";
import { fetchRecordsById } from "../API/fetchRecordsById";

export const setCharacterRecords = async ({
    offset,
    type,
    id,
    name,
    dispatch,
}: {
    dispatch: React.Dispatch<any>;
    offset: number;
    type: URLTypes;
    id?: number;
    name?: string;
}) => {
    let characterRecords = null;

    // Dispatches updates to redux store (state) accordingly
    switch (type) {
        case URLTypes.RECORDS_ALL:
            characterRecords = await fetchAllRecords(offset, dispatch);
            dispatch(setCharacterDetails(characterRecords));
            break;

        case URLTypes.RECORDS_BY_NAME:
            characterRecords = await fetchRecordsByName(name!, dispatch);
            dispatch(setCharacterDetails(characterRecords));
            break;

        case URLTypes.RECORDS_BY_ID:
            characterRecords = await fetchRecordsById(id!, dispatch);
            dispatch(setCharacterDetails(characterRecords));
            break;

        case URLTypes.COMIC_SERIES_BY_ID:
            const comicRecords = await fetchComicById(dispatch, id!);
            const seriesRecords = await fetchSeriesById(dispatch, id!);
            dispatch(setProfileRecord({ comicRecords, seriesRecords }));
            break;

        default:
            return;
    }
};
