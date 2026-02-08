export default function LocationButton() {
    return (
        <>
            <button className="flex flex-row gap-2 rounded-3xl bg-blue-700/30 p-3 text-nowrap hover:cursor-pointer backdrop-blur">
                <span className="material-symbols-rounded">my_location</span>
                <p className="hidden md:block">Current Location</p>
            </button>
        </>
    );
}
