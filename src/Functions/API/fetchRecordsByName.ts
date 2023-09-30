import { getRecordsByNameAPIURL } from "../General/getCharacterAPIURL";

export const fetchRecordsByName = async (name: string) => {
    let response, data;

    // Error handling : fetching of data from the API
    try {
        response = await fetch(
            getRecordsByNameAPIURL({
                offset: 0,
                name,
            })
        );
    } catch (error) {
        const msg =
            "Error Fetching character records from API. For more details check console (fn + f12) ";
        console.error(msg, error);
        return;
    }

    // Error handling : conversion of data to json format
    try {
        data = (await response.json()).data.results;
    } catch (error) {
        const msg =
            "Error Converting character data from API. For more details check console (fn + f12) ";
        console.error(msg, error);
        return;
    }

    return data;
};
