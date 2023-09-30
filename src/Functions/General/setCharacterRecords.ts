import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import {
    setCharacterDetails,
    setProfileRecord,
} from "../../StateManagement/Slices/characterSlice";
import { setModal } from "../../StateManagement/Slices/uiSlice";
import { fetchAllRecords } from "../API/fetchAllRecords";
import { fetchComicById } from "../API/fetchComicById";
import { fetchSeriesById } from "../API/fetchSeriesById";
import { fetchRecordsByName } from "../API/fetchRecordsByName";

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

    switch (type) {
        case URLTypes.RECORDS_ALL:
            characterRecords = await fetchAllRecords(offset, dispatch);
            dispatch(setCharacterDetails(characterRecords));
            break;

        case URLTypes.RECORDS_BY_NAME:
            characterRecords = await fetchRecordsByName(name!);
            dispatch(setCharacterDetails(characterRecords));
            break;

        case URLTypes.RECORDS_BY_ID:
            const comicRecords = await fetchComicById(dispatch, id!);
            const seriesRecords = await fetchSeriesById(dispatch, id!);
            dispatch(setProfileRecord({ comicRecords, seriesRecords }));
            break;

        default:
            return;
    }
};
