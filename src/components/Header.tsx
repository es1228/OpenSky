export default function Header() {
    return (
        <>
            <div className="ml-4 flex items-center">
                <div className="flex flex-row gap-4 items-center">
                    <span className="material-symbols-rounded">cloud</span>
                    <h1 className="hidden text-3xl text-black md:block dark:text-white">
                    OpenSky
                </h1>
                </div>
                <div className="relative mx-auto">
                    <div className="absolute m-3">
                        <span className="material-symbols-rounded">search</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter a city..."
                        className="rounded-3xl bg-neutral-50/30 p-3 pl-11 outline-0 md:min-w-sm dark:bg-neutral-950/30"
                    />
                </div>
                <button className="m-4 ml-0 flex flex-row gap-2 rounded-3xl bg-blue-700/30 p-3 text-nowrap hover:cursor-pointer">
                    <span className="material-symbols-rounded">
                        my_location
                    </span>
                    <p className="hidden md:block">Current Location</p>
                </button>
            </div>
        </>
    );
}
