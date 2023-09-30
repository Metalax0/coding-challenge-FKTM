import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCharacterRecords } from "../Functions/General/setCharacterRecords";
import { characterTableHeadings } from "../Data/table";
import TableHeadings from "./TableHeadings";
import TableRows from "./TableRows";

const CharacterTable = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setCharacterRecords({ offset: 0, dispatch });
    }, []);

    return (
        <div
            className="flex flex-col h-screen w-full lg:w-8/12 lg:max-w-screen-xl md:w-10/12 shadow-lg"
            style={{ height: "70vh", overflow: "auto" }}
        >
            <TableHeadings headings={characterTableHeadings} />
            <TableRows />
        </div>
    );
};

export default CharacterTable;
