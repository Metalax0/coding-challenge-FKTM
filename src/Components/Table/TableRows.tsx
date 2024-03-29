import { CharacterRecordType } from "../../InterfaceAndTypes/characterType";
import { characterTableHeadings } from "../../Data/table";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRecordsIndex } from "../../StateManagement/Slices/characterSlice";
import { RootState } from "../../StateManagement/Store";
import TableCell from "./TableCell";
import { useNavigate } from "react-router-dom";
import { setIsLoaded } from "../../StateManagement/Slices/uiSlice";

const TableRows = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { records, selectedRecordsIndex } = useSelector(
        (state: RootState) => state.character
    );
    const { activePage } = useSelector((state: RootState) => state.table);

    // Method : Keeps track of character data to represent in chart
    const handleCharacterSelection = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log("CHARA SELECTION CLICKED");
        e.stopPropagation();
        let selectedIndex =
            e.target.id === "checkbox-all"
                ? records.map((data: CharacterRecordType, i: number) => i)
                : [parseInt(e.target.id)];
        dispatch(setSelectedRecordsIndex(selectedIndex));
    };

    // Method : Changes route from home to page
    const handleTableRowClick = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        dispatch(setIsLoaded(false));
        navigate(`/character/${records[index].id}`);
    };

    return (
        <div className="flex flex-col">
            {records.map((record: CharacterRecordType, i: number) => (
                // One row per record
                <div
                    key={i}
                    className="grid grid-cols-5 align-middle transition duration-300 ease-in-out hover:bg-indigo-300"
                >
                    {/* One cell per every heading (column name) */}
                    {characterTableHeadings.map((heading: string, j) => (
                        <TableCell
                            key={j}
                            rowNum={i}
                            record={record}
                            heading={heading}
                            activePage={activePage}
                            handleCharacterSelection={handleCharacterSelection}
                            handleTableRowClick={handleTableRowClick}
                            selectedRecordsIndex={selectedRecordsIndex}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TableRows;
