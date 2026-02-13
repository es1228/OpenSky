type SavedLocationProps = {
    city: string;
    summary: string;
    temperature: string
}

export default function SavedLocation(props : SavedLocationProps) {
    return (
        <>
            <div className="flex w-full flex-col gap-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                <div className="flex flex-row items-center gap-4">
                    <div>
                        <h1 className="text-3xl">{props.city}</h1>
                        <p>{props.summary}</p>
                    </div>
                    <div className="ml-auto flex flex-row gap-4 flex-wrap">
                        <h1 className="text-5xl">{props.temperature}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
