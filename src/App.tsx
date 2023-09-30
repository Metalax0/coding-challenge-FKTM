import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./StateManagement/Store";
import { setIsLoaded } from "./StateManagement/Slices/uiSlice";
import Home from "./Components/Main/Home";
import ModalCollection from "./Components/Main/ModalCollection";
import Loading from "./Components/Main/Loading";
import CharacterDetail from "./Components/Character/CharacterDetail";

function App() {
    const dispatch = useDispatch();
    const { records } = useSelector((state: RootState) => state.character);
    const { isLoaded } = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        if (records[0].name !== "Loading...") dispatch(setIsLoaded(true));
    }, [records]);

    return (
        <>
            <Home />
            <ModalCollection />
            {!isLoaded ? <Loading /> : null}
            <CharacterDetail />
        </>
    );
}

export default App;
