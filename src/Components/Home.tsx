import CharacterChart from "./CharacterChart";
import CharacterSearch from "./CharacterSearch";
import CharacterTable from "./CharacterTable";
import TablePagination from "./TablePagination";

const Home = () => {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center overflow-x-hidden">
            <div className="bg-orange-50 flex flex-col items-center gap-5 justify-center w-screen h-screen">
                <h1 className="text-3xl font-extrabold text-red-500 md:text-4xl lg:text-5xl">
                    <span className="text-gray-800">List of </span>
                    Marvel
                    <span className="text-gray-800"> Characters</span>
                </h1>
                <CharacterSearch />
                <CharacterTable />
                <TablePagination />
            </div>
            <div className="bg-indigo-50 flex flex-col items-center gap-10 justify-center w-screen h-screen">
                <CharacterChart />
            </div>
        </div>
    );
};

export default Home;
