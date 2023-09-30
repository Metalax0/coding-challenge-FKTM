import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../StateManagement/Store";
import { CharacterRecordType } from "../InterfaceAndTypes/characterType";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
};

const CharacterChart = () => {
    const { records, selectedRecordsIndex } = useSelector(
        (state: RootState) => state.character
    );

    const labels = selectedRecordsIndex.map(
        (selectedIndex: number) => records[selectedIndex].name
    );

    const data = {
        labels,
        datasets: [
            {
                label: "Total comic appearance",
                data: selectedRecordsIndex.map(
                    (selectedIndex: number) =>
                        records[selectedIndex].comics?.available
                ),
                backgroundColor: "rgb(220 68 68)",
            },
        ],
    };

    return (
        <div className="flex flex-col gap-5 items-center justify-center w-2/3 h-screen">
            <h1 className="text-3xl font-extrabold text-gray-800 md:text-4xl lg:text-5xl">
                <span className=" text-red-500">Characters</span> And
                Their&nbsp;
                <span className=" text-red-500">Total</span>
                &nbsp;Comic Appearance
            </h1>
            <p className="w-full text-lg text-gray-500">
                Select characters from the table above, to show them in this
                chart
            </p>
            <Bar options={options} data={data} />
        </div>
    );
};

export default CharacterChart;
