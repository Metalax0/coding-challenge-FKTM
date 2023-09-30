import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import {
    setCharacterDetails,
    setProfileRecord,
} from "../../StateManagement/Slices/characterSlice";
import { setModal } from "../../StateManagement/Slices/uiSlice";
import { fetchAllRecords } from "../API/fetchAllRecords";
import { fetchRecordById } from "../API/fetchRecordById";
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
            break;

        case URLTypes.RECORDS_BY_NAME:
            characterRecords = await fetchRecordsByName(name);
            break;

        case URLTypes.RECORDS_BY_ID:
            characterRecords = await fetchRecordById(offset, dispatch, id!);
            break;

        default:
            return;
    }

    if (characterRecords.length !== 0) {
        if (id) dispatch(setProfileRecord(characterRecords));
        else dispatch(setCharacterDetails(characterRecords));
    } else
        dispatch(
            setModal({
                isOpen: true,
                type: "error",
                content:
                    "Search did not match any data (try searching for exact name: eg: captain america) ",
            })
        );
};
