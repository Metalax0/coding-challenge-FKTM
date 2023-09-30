import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./StateManagement/Store";
import { setIsLoaded } from "./StateManagement/Slices/uiSlice";
import Home from "./Components/Main/Home";
import ModalCollection from "./Components/Main/ModalCollection";
import Loading from "./Components/Main/Loading";
import CharacterDetail from "./Components/Character/CharacterDetail";
import { Route, Routes } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const { records, profileRecord } = useSelector(
        (state: RootState) => state.character
    );
    const { isLoaded } = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        if (records[0].name !== "Loading..." && profileRecord.series) {
            dispatch(setIsLoaded(true));
        }
    }, [records]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character/:id" element={<CharacterDetail />} />
            </Routes>
            <ModalCollection />
            {!isLoaded ? <Loading /> : null}
        </>
    );
}

export default App;
