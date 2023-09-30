import { setModal } from "../../StateManagement/Slices/uiSlice";
import { getComicIdAPIURL } from "../General/getAPIURL";

export const fetchComicById = async (
    dispatch: React.Dispatch<any>,
    id: number
) => {
    let response, data;

    // Error handling : fetching of data from the API
    try {
        response = await fetch(getComicIdAPIURL({ id }));
    } catch (error) {
        const msg =
            "Error Fetching comic records from API. For more details check console (fn + f12)";
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
            "Error Converting comic data from API. For more details check console (fn + f12)";
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
