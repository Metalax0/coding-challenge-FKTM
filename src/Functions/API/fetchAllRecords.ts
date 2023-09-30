import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import { setModal } from "../../StateManagement/Slices/uiSlice";
import { getCharacterAPIURL } from "../General/getCharacterAPIURL";

export const fetchAllRecords = async (
    offset: number,
    dispatch: React.Dispatch<any>
) => {
    let response, data;

    // Error handling : fetching of data from the API
    try {
        response = await fetch(
            getCharacterAPIURL({ offset, type: URLTypes.RECORDS_ALL })
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
