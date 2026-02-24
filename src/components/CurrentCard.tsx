type CurrentCardProps = {
    temperature: string;
    summary: string;
    date: string;
    location: string;
    icon: string;
};

export default function CurrentCard({
    temperature,
    summary,
    date,
    location,
    icon,
}: CurrentCardProps) {
    return (
        <>
            <div className="flex w-full flex-col justify-between gap-4 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur md:w-70 dark:bg-neutral-800/40">
                <h1 className="text-lg font-bold text-black dark:text-white">
                    Current Conditions
                </h1>
                <img
                    src={`${icon}.svg`}
                    alt={`${icon}`}
                    height={100}
                    width={100}
                />
                <h1 className="text-5xl text-black dark:text-white">
                    {temperature}
                </h1>
                <p className="text-black dark:text-white">{summary}</p>
                <hr className="h-0.5 rounded-3xl border-none bg-neutral-950 dark:bg-neutral-50" />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <span className="material-symbols-rounded text-black dark:text-white">
                            today
                        </span>
                        <p className="text-black dark:text-white">{date}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <span className="material-symbols-rounded text-black dark:text-white">
                            location_on
                        </span>
                        <p className="text-black dark:text-white">{location}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
