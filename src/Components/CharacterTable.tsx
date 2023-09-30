import { useState, useEffect } from "react";
import { tableHeadings } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/Store";
import {
    setCharacterDetails,
    setSelectedRecordsIndex,
} from "../StateManagement/Slices/characterSlice";
import { fetchCharacterRecords } from "../Functions/fetchCharacterRecords";
import { CharacterRecordType } from "../InterfaceAndTypes/characterType";
import { Pagination } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const CharacterTable = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { records, selectedRecordsIndex } = useSelector(
        (state: RootState) => state.character
    );

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
    const handleTableRowClick = (data: any) => {};

    // Method : Updates page number, fetches data with applied offset
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        getCharacterRecords({ offset: page === 1 ? 0 : (page - 1) * 20 });
        dispatch(setSelectedRecordsIndex(null));
    };

    // Method : Keeps track of character data to represent in chart
    const handleCharacterSelection = (e: any) => {
        let selectedIndex =
            e.target.id === "checkbox-all"
                ? records.map((data: CharacterRecordType, i: number) => i)
                : [parseInt(e.target.id)];
        console.log(selectedIndex);
        dispatch(setSelectedRecordsIndex(selectedIndex));
    };

    console.log(records);

    // Method : Alternates between two background colors for table row
    const getTableDataClass = (i: number) => {
        return `p-0 text-xs flex align-center items-center sm:p-2 sm:text-xs md:text-sm lg:text-base
            ${i % 2 === 0 ? "bg-indigo-50" : "bg-indigo-100"}`;
    };

    return (
        <>
            <div
                className="flex flex-col h-screen w-full lg:w-8/12 lg:max-w-screen-xl md:w-10/12 shadow-lg"
                style={{ height: "75vh", overflow: "auto" }}
            >
                <div className="grid grid-cols-5 bg-red-500 sticky top-0 z-10 font-bold text-xs md:text-sm">
                    <div className="p-2 text-center">
                        <input
                            type="checkbox"
                            onChange={handleCharacterSelection}
                            id={"checkbox-all"}
                        />
                    </div>
                    <div className="p-2 text-center">S.N</div>
                    <div className="p-2 text-center">Name</div>
                    <div className="p-2 text-center">Description</div>
                    <div className="p-2 text-center">Thumbnail</div>
                </div>

                <div className="flex flex-col">
                    {records.map((data: CharacterRecordType, i: number) => (
                        <div className="grid grid-cols-5 align-middle transition duration-300 ease-in-out hover:scale-95 hover:cursor-pointer">
                            <div className={getTableDataClass(i)}>
                                <input
                                    type="checkbox"
                                    onChange={handleCharacterSelection}
                                    id={i.toString()}
                                    checked={
                                        selectedRecordsIndex.includes(i)
                                            ? true
                                            : false
                                    }
                                />
                            </div>
                            <div className={getTableDataClass(i)}>
                                {currentPage === 1
                                    ? i + 1
                                    : currentPage * 20 + i}
                            </div>
                            <div className={getTableDataClass(i)}>
                                {data.name ? data.name : "--- Missing Name ---"}
                            </div>
                            <div className={getTableDataClass(i)}>
                                <Paragraph
                                    ellipsis={{
                                        rows: 2,
                                    }}
                                    className="antd-paragraph"
                                >
                                    {data.description
                                        ? data.description
                                        : "<Missing Description>"}
                                </Paragraph>
                            </div>
                            <div
                                className={`${getTableDataClass(
                                    i
                                )} flex justify-center`}
                            >
                                <img
                                    src={
                                        data.thumbnail.path +
                                        "/standard_large." +
                                        data.thumbnail.extension
                                    }
                                    alt="Thumbnail"
                                    className="w-1/2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
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
