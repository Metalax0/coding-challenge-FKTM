import Search from "antd/es/input/Search";
import { useDispatch } from "react-redux";
import { setCharacterRecords } from "../../Functions/General/setCharacterRecords";
import { URLTypes } from "../../InterfaceAndTypes/URLTypes";

const CharacterSearch = () => {
    const dispatch = useDispatch();

    const handleSearch = (searchText: string) => {
        setCharacterRecords({
            offset: 0,
            dispatch,
            type: URLTypes.RECORDS_BY_NAME,
            name: searchText,
        });
    };

    return (
        <Search
            placeholder="Input character name to search"
            onSearch={handleSearch}
            style={{ width: 300 }}
        />
    );
};

export default CharacterSearch;
