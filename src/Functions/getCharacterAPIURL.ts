export const getCharacterAPIURL = (offset: number): string => {
    return `http://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`;
};
