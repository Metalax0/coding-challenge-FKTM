import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import { setCharacterDetails } from "../../StateManagement/Slices/characterSlice";
import { setModal } from "../../StateManagement/Slices/uiSlice";
import { fetchAllRecords } from "../API/fetchAllRecords";
import { fetchRecordsByName } from "../API/fetchRecordsByName";

export const setCharacterRecords = async (params: {
    offset: number;
    dispatch: React.Dispatch<any>;
    type: URLTypes;
    name?: string;
}) => {
    const { offset, dispatch, type, name } = params;
    let characterRecords = null;

    switch (type) {
        case URLTypes.RECORDS_ALL:
            characterRecords = await fetchAllRecords(offset, dispatch);
            break;

        case URLTypes.RECORDS_BY_Name:
            characterRecords = await fetchRecordsByName(name);
            break;

        default:
            return;
    }

    // const characterRecords = await fetchAllRecords(offset, dispatch);
    console.log(characterRecords);
    if (characterRecords.length !== 0)
        dispatch(setCharacterDetails(characterRecords));
    else
        dispatch(
            setModal({
                isOpen: true,
                type: "error",
                content:
                    "Search did not match any data (try searching for exact name: eg: captain america) ",
            })
        );
};
