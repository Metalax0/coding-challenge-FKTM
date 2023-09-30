import { CharacterRecordType } from "../../InterfaceAndTypes/characterType";

const ComicSeriesCols = ({
    record,
    comicData,
    seriesData,
}: {
    record: CharacterRecordType;
    comicData: [{ title: string }];
    seriesData: [{ title: string }];
}) => {
    // Method: Get list of html lables containing names of all comics related to current character
    const getAllComics = () => {
        return comicData.map((comic: any, i: number) => (
            <label className="border border-b-black py-2" key={i}>
                {comic.title}
            </label>
        ));
    };

    // Method: Get list of html lables containing names of all series related to current character
    const getAllSeries = () => {
        return seriesData.map((series: any, i: number) => (
            <label className="border border-b-black py-2" key={i}>
                {series.title}
            </label>
        ));
    };

    if (!record.comics && !record.series) return <h1> On no Empty </h1>;
    else
        return (
            <div className="flex">
                {/* Left Col - Comic */}
                <div className="p-4 text-xs lg:text-lg md:text-base sm:text-sm">
                    <h1 className="bg-red-500 text-white p-1">
                        <b>Comic</b> ({record.comics!.available})
                    </h1>
                    <div
                        className="overflow-auto max-h-80 flex flex-col "
                        style={{ width: "30vw" }}
                    >
                        {getAllComics()}
                    </div>
                </div>

                {/* Right Col - Series */}
                <div className="p-4 text-xs text-xs lg:text-lg md:text-base sm:text-sm">
                    <h1 className="bg-indigo-500 text-white p-1">
                        <b>Series</b> ({record.series!.available})
                    </h1>
                    <div
                        className="overflow-auto max-h-80 flex flex-col"
                        style={{ width: "30vw" }}
                    >
                        {getAllSeries()}
                    </div>
                </div>
            </div>
        );
};

export default ComicSeriesCols;
