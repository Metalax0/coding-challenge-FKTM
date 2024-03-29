import { Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { TableCellProps } from "../../InterfaceAndTypes/tableType";

const TableCell = ({
    rowNum,
    heading,
    record,
    activePage,
    handleCharacterSelection,
    handleTableRowClick,
    selectedRecordsIndex,
}: TableCellProps) => {
    // Method : Alternates between two background colors for table row
    const getTableDataClass = (i: number) => {
        return `p-0 text-xs flex align-center items-center sm:p-2 sm:text-xs md:text-sm lg:text-base
        ${selectedRecordsIndex.includes(i) ? "bg-indigo-100" : null} `;
    };

    // Method: Returns JSX elements according to heading type
    const renderCell = () => {
        switch (heading) {
            case "":
                return (
                    <input
                        type="checkbox"
                        onChange={handleCharacterSelection}
                        id={rowNum.toString()}
                        checked={
                            selectedRecordsIndex.includes(rowNum) ? true : false
                        }
                    />
                );

            case "S.N":
                return (
                    <label
                        className="hover:cursor-pointer"
                        onClick={(e) => handleTableRowClick(e, rowNum)}
                    >
                        {activePage === 1
                            ? rowNum + 1
                            : (activePage - 1) * 20 + rowNum + 1}
                    </label>
                );

            case "Name":
                return (
                    <label
                        className="hover:cursor-pointer"
                        onClick={(e) => handleTableRowClick(e, rowNum)}
                    >
                        {record.name ? record.name : "--- Missing Name ---"}
                    </label>
                );

            case "Description":
                return (
                    <Paragraph
                        onClick={(e) => handleTableRowClick(e, rowNum)}
                        ellipsis={{
                            rows: 2,
                        }}
                        className="antd-paragraph hover:cursor-pointer"
                    >
                        {record.description
                            ? record.description
                            : "<Missing Description>"}
                    </Paragraph>
                );

            case "Thumbnail":
                return (
                    <Image
                        width={"6vw"}
                        src={
                            record.thumbnail.path +
                            "." +
                            record.thumbnail.extension
                        }
                        preview={{
                            minScale: 50,
                        }}
                        alt="Thumbnail"
                    />
                );

            default:
                <h1>Invalid heading type</h1>;
                break;
        }
    };

    return <div className={getTableDataClass(rowNum)}>{renderCell()}</div>;
};

export default TableCell;
