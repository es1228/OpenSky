export default function LocationButton() {
    return (
        <>
            <button className="flex flex-row gap-2 rounded-3xl bg-blue-500/20 p-3 text-nowrap backdrop-blur hover:cursor-pointer">
                <span className="material-symbols-rounded">my_location</span>
                <p className="hidden md:block">Current Location</p>
            </button>
        </>
    );
}
