import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { setSelectedRecordsIndex } from "../../StateManagement/Slices/characterSlice";
import { setActivePage } from "../../StateManagement/Slices/tableSlice";
import { setCharacterRecords } from "../../Functions/General/setCharacterRecords";
import { URLTypes } from "../../InterfaceAndTypes/URLTypes";

const TablePagination = () => {
    const dispatch = useDispatch();

    // Method : Updates page number, fetches data with applied offset
    const handlePageChange = (page: number) => {
        const offset = page === 1 ? 0 : (page - 1) * 20;
        setCharacterRecords({ offset, dispatch, type: URLTypes.RECORDS_ALL });
        dispatch(setActivePage(page));
        dispatch(setSelectedRecordsIndex(null));
    };

    return (
        <Pagination
            total={1580}
            pageSize={20}
            showSizeChanger={false}
            onChange={handlePageChange}
            responsive
            showQuickJumper
            className="text-center"
        />
    );
};

export default TablePagination;
