import { useEffect } from "react";
import { tableHeadings } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/Store";
import { setCharacterDetails } from "../StateManagement/Slices/characterSlice";
import { fetchCharacterRecords } from "../Functions/fetchCharacterRecords";
import { CharacterRecordType } from "../InterfaceAndTypes/characterTypes";

const CharacterTable = () => {
    const dispatch = useDispatch();
    const { records } = useSelector((state: RootState) => state.character);

    useEffect(() => {
        getCharacterRecords();
    }, []);

    // Method : fetches the character records from API and saves result into redux store
    const getCharacterRecords = async () => {
        const characterRecords = await fetchCharacterRecords();
        dispatch(setCharacterDetails(characterRecords));
    };

    console.log(records);

    const renderTableHeadings = () => {
        return tableHeadings.map((title, i) => (
            <th
                className="px-5 py-3 border-black border-b-2 border-r-2"
                key={i}
            >
                {title}
            </th>
        ));
    };

    return (
        <div className="table-auto px-64">
            <table className="text-base text-left border-black border-2 ">
                <thead className="text-base uppercase bg-gray-400 border-b ">
                    <tr>{renderTableHeadings()}</tr>
                </thead>
                <tbody>
                    {records.map((data: CharacterRecordType, i: number) => (
                        <tr>
                            <td className="px-5 py-3 text-center border-black border-b-2 border-r-2">
                                <input type="checkbox" />
                            </td>
                            <td className="px-5 py-3 border-black border-b-2 border-r-2">
                                {i + 1}
                            </td>
                            <td className="px-5 py-3 border-black border-b-2 border-r-2">
                                {data.name ? data.name : "--- Missing Name ---"}
                            </td>
                            <td className="px-5 py-3 border-black border-b-2 border-r-2">
                                {data.description
                                    ? data.description
                                    : "--- Missing Description ---"}
                            </td>
                            <td className="px-5 py-3 border-black border-b-2 border-r-2">
                                {/* {data.thumbnail.path} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CharacterTable;
