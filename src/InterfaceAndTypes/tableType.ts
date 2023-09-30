import { CharacterRecordType } from "./characterType";

export interface TableStateType {
    activePage: number;
}

export interface TableCellProps {
    rowNum: number;
    heading: string;
    record: CharacterRecordType;
    activePage: number;
    handleCharacterSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTableRowClick: (
        e: React.MouseEvent<HTMLElement>,
        index: number
    ) => void;
    selectedRecordsIndex: number[];
}
