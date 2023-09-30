import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import { setModal } from "../../StateManagement/Slices/uiSlice";
import { getCharacterAPIURL } from "../General/getCharacterAPIURL";

export const fetchRecordById = async (
    offset: number,
    dispatch: React.Dispatch<any>,
    id: number
) => {
    let response, data;

    // Error handling : fetching of data from the API
    try {
        response = await fetch(
            getCharacterAPIURL({ offset, type: URLTypes.RECORDS_BY_ID, id })
        );
    } catch (error) {
        const msg =
            "Error Fetching character records from API. For more details check console (fn + f12)";
        console.error(msg, error);
        dispatch(
            setModal({
                isOpen: true,
                content: msg,
                type: "error",
            })
        );
        return;
    }

    // Error handling : conversion of data to json format
    try {
        data = (await response.json()).data.results;
    } catch (error) {
        const msg =
            "Error Converting character data from API. For more details check console (fn + f12)";
        console.error(msg, error);
        return;
    }

    return data;
};
