export default function Searchbar() {
    return (
        <>
            <div className="relative">
                <div className="absolute z-1000 m-3">
                    <span className="material-symbols-rounded text-black dark:text-white">
                        search
                    </span>
                </div>
                <input
                    type="text"
                    placeholder="Enter a city..."
                    className="rounded-3xl bg-neutral-400/20 p-3 pl-11 text-black outline-0 backdrop-blur md:min-w-sm dark:bg-neutral-800/40 dark:text-white"
                    id="search"
                />
            </div>
        </>
    );
}
