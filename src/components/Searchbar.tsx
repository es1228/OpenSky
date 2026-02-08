export default function Searchbar() {
    return (
        <>
            <div className="relative">
                <div className="absolute m-3 z-1000">
                    <span className="material-symbols-rounded">search</span>
                </div>
                <input
                    type="text"
                    placeholder="Enter a city..."
                    className="rounded-3xl bg-neutral-50/30 p-3 pl-11 outline-0 md:min-w-sm dark:bg-neutral-950/30 backdrop-blur"
                />
            </div>
        </>
    );
}
