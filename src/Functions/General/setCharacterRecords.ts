import { setCharacterDetails } from "../../StateManagement/Slices/characterSlice";
import { fetchAllRecords } from "../API/fetchAllRecords";

export const setCharacterRecords = async (params: {
    offset: number;
    dispatch: React.Dispatch<any>;
}) => {
    const { offset, dispatch } = params;
    const characterRecords = await fetchAllRecords(offset);
    if (characterRecords) dispatch(setCharacterDetails(characterRecords));
};
