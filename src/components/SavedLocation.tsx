type SavedLocationProps = {
    city: string;
    summary: string;
    temperature: string;
};

export default function SavedLocation({
    city,
    summary,
    temperature,
}: SavedLocationProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-400/20 p-4 backdrop-blur dark:bg-neutral-800/40">
                <div className="flex flex-row items-center gap-4">
                    <div>
                        <h1 className="text-3xl text-black dark:text-white">
                            {city}
                        </h1>
                        <p className="text-black dark:text-white">{summary}</p>
                    </div>
                    <div className="ml-auto flex flex-row flex-wrap gap-4">
                        <h1 className="text-5xl text-black dark:text-white">
                            {temperature}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
