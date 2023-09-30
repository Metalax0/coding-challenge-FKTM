import { useState, useEffect } from "react";
import { tableHeadings } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/Store";
import { setCharacterDetails } from "../StateManagement/Slices/characterSlice";
import { fetchCharacterRecords } from "../Functions/fetchCharacterRecords";
import { CharacterRecordType } from "../InterfaceAndTypes/characterType";
import { Pagination, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const CharacterTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const { records } = useSelector((state: RootState) => state.character);

    useEffect(() => {
        getCharacterRecords();
    }, []);

    // Method : Fetches the character records from API and saves result into redux store
    const getCharacterRecords = async (
        { offset }: { offset: number } = { offset: 0 }
    ) => {
        const characterRecords = await fetchCharacterRecords(offset);
        if (characterRecords) dispatch(setCharacterDetails(characterRecords));
    };

    // Method : Changes route from home to page
    const handleTableRowClick = (data: any) => {
        console.log("Tagble row clicked", data);
    };

    // Method : Updates page number, fetches data with applied offset
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        getCharacterRecords({ offset: page === 1 ? 0 : (page - 1) * 20 });
    };

    // Method : Keeps track of character data to represent in chart
    const handleCharacterSelection = () => {
        console.log("character selection");
    };

    // Method : Reads headings from pre-defined list and renders then to DOM
    const renderTableHeadings = () => {
        return tableHeadings.map((title, i) => (
            <th
                className="px-3 py-1 outline outline-1 sticky top-0 text-base uppercase bg-indigo-400 text-center"
                key={i}
            >
                {title}
            </th>
        ));
    };

    // Method : Alternates between two background colors for table row
    const getTableDataClass = (i: number) => {
        return `px-7 py-3 text-center text-sm ${
            i % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
        }`;
    };

    return (
        <>
            <div style={{ height: "80vh", overflow: "auto" }}>
                <table className="text-base text-left">
                    {/* Column Headings */}
                    <thead className="t">
                        <tr>{renderTableHeadings()}</tr>
                    </thead>
                    <tbody>
                        {records.map((data: CharacterRecordType, i: number) => (
                            <tr onClick={handleTableRowClick}>
                                {/* Character Selector */}
                                <td className={getTableDataClass(i)}>
                                    <input
                                        type="checkbox"
                                        onChange={handleCharacterSelection}
                                    />
                                </td>

                                {/* Serial Number */}
                                <td className={getTableDataClass(i)}>
                                    {currentPage === 1
                                        ? i + 1
                                        : currentPage * 20 + i}
                                </td>

                                {/* Name */}
                                <td className={getTableDataClass(i)}>
                                    <label>
                                        {data.name
                                            ? data.name
                                            : "--- Missing Name ---"}
                                    </label>
                                </td>

                                {/* Description */}
                                <td className={getTableDataClass(i)}>
                                    <Paragraph
                                        ellipsis={{
                                            rows: 2,
                                        }}
                                        style={{
                                            maxWidth: 400,
                                            minWidth: 100,
                                        }}
                                    >
                                        {data.description
                                            ? data.description
                                            : "--- Missing Description ---"}
                                    </Paragraph>
                                </td>

                                {/* Thumbnail */}
                                <td className={getTableDataClass(i)}>
                                    <img
                                        src={
                                            data.thumbnail.path +
                                            "/standard_large." +
                                            data.thumbnail.extension
                                        }
                                        alt="Thumbnail"
                                        className="w-1/2"
                                    />

                                    {/* <Image
                                        width={100}
                                        src={
                                            data.thumbnail.path +
                                            "/standard_fantastic." +
                                            data.thumbnail.extension
                                        }
                                        alt="marvel character img"
                                    /> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                total={1580}
                pageSize={20}
                showSizeChanger={false}
                onChange={handlePageChange}
                responsive
                showQuickJumper
                className="text-center"
            />
        </>
    );
};

export default CharacterTable;
