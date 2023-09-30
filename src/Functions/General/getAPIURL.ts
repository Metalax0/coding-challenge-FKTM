export const getAllRecordsAPIURL = ({ offset }: { offset: number }) => {
    return `http://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`;
};

export const getRecordsByNameAPIURL = ({
    offset,
    name,
}: {
    offset: number;
    name: string;
}) => {
    return `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`;
};

export const getRecordsById = ({ id }: { id: number }) => {
    return `http://gateway.marvel.com/v1/public/characters/${id}?apikey=${process.env.REACT_APP_API_KEY}&limit=2`;
};

export const getComicIdAPIURL = ({ id }: { id: number }) => {
    return `http://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${process.env.REACT_APP_API_KEY}&limit=100`;
};

export const getSeriesIdAPIURL = ({ id }: { id: number }) => {
    return `http://gateway.marvel.com/v1/public/characters/${id}/series?apikey=${process.env.REACT_APP_API_KEY}&limit=100`;
};
