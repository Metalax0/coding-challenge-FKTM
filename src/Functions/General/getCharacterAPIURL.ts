import { URLTypes } from "../../InterfaceAndTypes/URLTypes";

export const getCharacterAPIURL = (
    offset: number,
    type: URLTypes,
    name?: string
): string => {
    switch (type) {
        case URLTypes.RECORDS_ALL:
            return `http://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`;

        case URLTypes.RECORDS_BY_Name:
            return `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`;

        default:
            return `http://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`;
    }
};
