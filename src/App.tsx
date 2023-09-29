import "./App.css";
import CharacterTable from "./Components/CharacterTable";

function App() {
    return (
        <div className="bg-gray-100 flex flex-col justify-top items-center border-8 border-red-500">
            <h1 className="mb-10 text-4xl font-extrabold text-red-500 md:text-5xl lg:text-6xl">
                Marvel
                <span className="text-gray-800">Characters</span>
            </h1>
            <CharacterTable />
        </div>
    );
}

export default App;
