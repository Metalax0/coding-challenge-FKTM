import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./StateManagement/Store";
import { setIsLoaded } from "./StateManagement/Slices/uiSlice";
import Home from "./Components/Initial/Home";
import ModalCollection from "./Components/Initial/ModalCollection";
import Loading from "./Components/Initial/Loading";

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
        </>
    );
}

export default App;
