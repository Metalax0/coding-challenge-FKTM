import CharacterTable from "./Components/CharacterTable";

function App() {
    return (
        <div className="bg-gray-100 flex gap-5 flex-col justify-center items-center p-5">
            <h1 className="text-2xl font-extrabold text-red-500 md:text-4xl lg:text-5xlxl">
                Marvel
                <span className="text-gray-800">Characters</span>
            </h1>
            <CharacterTable />
        </div>
    );
}

export default App;
