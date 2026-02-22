type LocationButtonProps = {
    handleClick: () => void;
};

export default function LocationButton({ handleClick }: LocationButtonProps) {
    return (
        <>
            <button
                className="flex flex-row gap-2 rounded-3xl bg-blue-500/20 p-3 text-nowrap backdrop-blur hover:cursor-pointer"
                onClick={handleClick}
            >
                <span className="material-symbols-rounded text-black dark:text-white">
                    my_location
                </span>
                <p className="hidden text-black md:block dark:text-white">
                    Current Location
                </p>
            </button>
        </>
    );
}
