{
    /* <input
type="checkbox"
onChange={handleCharacterSelection}
id={"checkbox-all"}
/> */
}

const TableHeadings = ({ headings }: { headings: string[] }) => {
    return (
        <div className="grid grid-cols-5 bg-red-500 sticky top-0 z-10 font-bold text-xs md:text-sm">
            {headings.map((title: string, i: number) => {
                return (
                    <div key={i} className="p-2 text-center">
                        {title}
                    </div>
                );
            })}
        </div>
    );
};

export default TableHeadings;
