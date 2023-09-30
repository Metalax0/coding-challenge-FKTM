import Search from "antd/es/input/Search";

const CharacterSearch = () => {
    const handleSearch = () => {};

    return (
        <Search
            placeholder="input search text"
            onSearch={handleSearch}
            style={{ width: 200 }}
        />
    );
};

export default CharacterSearch;
