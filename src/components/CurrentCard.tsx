export default function CurrentCard() {
    return (
        <>
            <div className="flex w-full flex-col justify-between gap-4 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur md:w-70 dark:bg-neutral-800/40">
                <h1 className="text-lg font-bold">Current Conditions</h1>
                <h1 className="text-5xl">27°C</h1>
                <p>Sunny</p>
                <hr className="h-0.5 rounded-3xl border-none bg-neutral-950 dark:bg-neutral-50" />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <span className="material-symbols-rounded">today</span>
                        <p>February 8th, 2026</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <span className="material-symbols-rounded">
                            location_on
                        </span>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>
        </>
    );
}
