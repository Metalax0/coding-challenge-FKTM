import { getCharacterAPIURL } from "./getCharacterAPIURL";

export const fetchCharacterRecords = async () => {
    let response, data;

    // Error handling : fetching of data from the API
    try {
        response = await fetch(getCharacterAPIURL({ offset: 5 }));
    } catch (error) {
        console.error(
            "Error Fetching character records from API. Details => ",
            error
        );
        return;
    }

    // Error handling : conversion of data to json format
    try {
        data = (await response.json()).data.results;
    } catch (error) {
        console.error(
            "Error Converting character data from API. Details => ",
            error
        );
        return;
    }

    return data;
};
