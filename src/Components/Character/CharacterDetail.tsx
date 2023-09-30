import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../StateManagement/Store";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect } from "react";
import { setCharacterRecords } from "../../Functions/General/setCharacterRecords";
import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import ComicSeriesCols from "./ComicSeriesCols";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { setIsLoaded } from "../../StateManagement/Slices/uiSlice";

const CharacterDetail = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { records, profileRecord } = useSelector(
        (state: RootState) => state.character
    );
    const comicData = profileRecord.comics;
    const seriesData = profileRecord.series;
    const record = records[0];

    useEffect(() => {
        if (record.id !== 0)
            setCharacterRecords({
                offset: 0,
                dispatch,
                type: URLTypes.COMIC_SERIES_BY_ID,
                id: id ? parseInt(id) : 1010354,
            });
    }, [records]);

    useEffect(() => {
        setCharacterRecords({
            offset: 0,
            dispatch,
            type: URLTypes.RECORDS_BY_ID,
            id: id ? parseInt(id) : 1010354,
        });
    }, []);

    // Method: Initiate loading and navigate back to home page
    const handleHomeBttnClick = () => {
        dispatch(setIsLoaded(false));
        navigate("/");
    };

    if (!record) return null;
    else
        return (
            <div className="w-full h-screen flex flex-col gap-10 justify-center items-center ">
                <div className="flex justify-center items-center transition duration-300 ease-in-out hover:scale-95 shadow-[20px_25px_25px_5px_rgb(0,0,0,0.3)] bg-orange-100">
                    <Card
                        style={{
                            minWidth: 100,
                            maxWidth: "30vw",
                            textAlign: "center",
                        }}
                        cover={
                            <img
                                style={{
                                    minWidth: 100,
                                    maxWidth: 300,
                                }}
                                alt="example"
                                src={`${record.thumbnail.path}.${record.thumbnail.extension}`}
                            />
                        }
                    >
                        <Meta
                            title={record.name}
                            description={
                                record.description
                                    ? record.description
                                    : "A mysterious person without any description"
                            }
                        />
                    </Card>
                    <ComicSeriesCols
                        record={record}
                        comicData={comicData}
                        seriesData={seriesData}
                    />
                </div>
                <button
                    type="button"
                    className="text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
                    onClick={handleHomeBttnClick}
                >
                    Home
                </button>
            </div>
        );
};

export default CharacterDetail;
