import { useEffect } from "react";
import { tableHeadings } from "../Data";

const CharacterTable = () => {
    var url =
        "http://gateway.marvel.com/v1/public/characters?limit=20&apikey=" +
        process.env.REACT_APP_API_KEY;

    const fetchComicData = async () => {
        const response = await fetch(url);
        const data = (await response.json()).data.results;
        console.log(data);
    };

    useEffect(() => {
        fetchComicData();
    }, []);

    const renderTableHeadings = () => {
        return tableHeadings.map((title, i) => (
            <th
                className="px-5 py-3 border-black border-b-2 border-r-2"
                key={i}
            >
                {title}
            </th>
        ));
    };

    return (
        <div className="table-auto ">
            <table className="text-base text-left border-black border-2">
                <thead className="text-base uppercase bg-gray-400 border-b ">
                    <tr>{renderTableHeadings()}</tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-5 py-3 text-center border-black border-b-2 border-r-2">
                            <input type="checkbox" />
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            1
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            The Sliding Mr. Bones
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            Malcolm Lockyer
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            1961
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-3 text-center border-black border-b-2 border-r-2">
                            <input type="checkbox" />
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            2
                        </td>

                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            Witchy Woman
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            The Eagles
                        </td>
                        <td className="px-5 py-3 border-black border-b-2 border-r-2">
                            1972
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CharacterTable;
