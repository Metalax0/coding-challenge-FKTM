export const getCharacterAPIURL = ({
    limit = 20,
    offset = 0,
}: {
    limit?: number;
    offset?: number;
} = {}): string => {
    return `http://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${process.env.REACT_APP_API_KEY}`;
};
