import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../StateManagement/Store";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect } from "react";
import { setCharacterRecords } from "../../Functions/General/setCharacterRecords";
import { URLTypes } from "../../InterfaceAndTypes/URLTypes";
import ComicSeriesCols from "./ComicSeriesCols";

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { records, profileRecord } = useSelector(
        (state: RootState) => state.character
    );
    const comicData = profileRecord.comics;
    const seriesData = profileRecord.series;

    const record = records[10];

    console.log(profileRecord);

    useEffect(() => {
        setCharacterRecords({
            offset: 0,
            dispatch,
            type: URLTypes.RECORDS_BY_ID,
            id: 1010354,
        });
    }, []);

    // // Get list of html lables containing names of all comics related to current character
    // const getAllComics = () => {
    //     return comicData.map((comic: any, i: number) => (
    //         <label className="border border-b-black py-2" key={i}>
    //             {comic.title}
    //         </label>
    //     ));
    // };

    // // Get list of html lables containing names of all series related to current character
    // const getAllSeries = () => {
    //     return seriesData.map((series: any, i: number) => (
    //         <label className="border border-b-black py-2" key={i}>
    //             {series.title}
    //         </label>
    //     ));
    // };

    if (profileRecord.series[0].title === "") return null;
    else
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center ">
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
                    {/* <div className="flex">
                        <div className="p-4 text-xs lg:text-xl md:text-lg sm:text-sm">
                            <h1 className="bg-red-500 text-white p-1">
                                <b>Comic</b> ({record.comics.available})
                            </h1>
                            <div
                                className="overflow-auto max-h-80 flex flex-col "
                                style={{ width: "30vw" }}
                            >
                                {getAllComics()}
                            </div>
                        </div>
                        <div className="p-4 text-xs lg:text-xl md:text-lg sm:text-sm">
                            <h1 className="bg-indigo-500 text-white p-1">
                                <b>Series</b> ({record.comics.available})
                            </h1>
                            <div
                                className="overflow-auto max-h-80 flex flex-col"
                                style={{ width: "30vw" }}
                            >
                                {getAllSeries()}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
};

export default CharacterDetail;

// search by id
