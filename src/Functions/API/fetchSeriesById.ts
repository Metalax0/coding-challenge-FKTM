import { setModal } from "../../StateManagement/Slices/uiSlice";
import { getSeriesIdAPIURL } from "../General/getAPIURL";

export const fetchSeriesById = async (
    dispatch: React.Dispatch<any>,
    id: number
) => {
    let response, data;

    // Error handling : fetching of data from the API
    try {
        response = await fetch(getSeriesIdAPIURL({ id }));
    } catch (error) {
        const msg =
            "Error Fetching series record from API. For more details check console (fn + f12)";
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
            "Error Converting series data from API. For more details check console (fn + f12)";
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

    return data;
};
