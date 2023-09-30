import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../StateManagement/Store";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect } from "react";
import { setCharacterRecords } from "../../Functions/General/setCharacterRecords";
import { URLTypes } from "../../InterfaceAndTypes/URLTypes";

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { profileRecord } = useSelector(
        (state: RootState) => state.character
    );

    useEffect(() => {
        setCharacterRecords({
            offset: 0,
            dispatch,
            type: URLTypes.RECORDS_BY_ID,
            id: 1010354,
        });
    }, []);

    // Get list of html lables containing names of all comics related to current character
    const getAllComics = () => {
        return profileRecord[0].comics!.items.map(
            ({ name }: { name: string }) => (
                <label className="border border-b-black py-2" key={name}>
                    {" "}
                    {name}
                </label>
            )
        );
    };

    // Get list of html lables containing names of all series related to current character
    const getAllSeries = () => {
        return profileRecord[0].series!.items.map(
            ({ name }: { name: string }) => (
                <label className="border border-b-black py-2" key={name}>
                    {" "}
                    {name}
                </label>
            )
        );
    };

    if (profileRecord[0].id === 0) return null;
    else
        return (
            <div className="w-full h-screen flex flex-col justify-center items-center ">
                <div className="flex justify-center items-center transition duration-300 ease-in-out hover:scale-95 shadow-[20px_25px_25px_5px_rgb(0,0,0,0.3)] bg-orange-100">
                    <div>
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
                                    src={`${profileRecord[0].thumbnail.path}.${profileRecord[0].thumbnail.extension}`}
                                />
                            }
                        >
                            <Meta
                                title={profileRecord[0].name}
                                description={
                                    profileRecord[0].description
                                        ? profileRecord[0].description
                                        : "A mysterious person without any description"
                                }
                            />
                        </Card>
                    </div>
                    <div className="flex">
                        <div className="p-4 text-xs lg:text-xl md:text-lg sm:text-sm">
                            <h1>
                                <b>Comic</b> (
                                {profileRecord[0].comics.available})
                            </h1>
                            <div
                                className="overflow-auto max-h-80 flex flex-col "
                                style={{ width: "30vw" }}
                            >
                                {getAllComics()}
                            </div>
                        </div>
                        <div className="p-4 text-xs lg:text-xl md:text-lg sm:text-sm">
                            <h1>
                                <b>Series</b> (
                                {profileRecord[0].comics.available})
                            </h1>
                            <div
                                className="overflow-auto max-h-80 flex flex-col"
                                style={{ width: "30vw" }}
                            >
                                {getAllSeries()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default CharacterDetail;

// search by id
