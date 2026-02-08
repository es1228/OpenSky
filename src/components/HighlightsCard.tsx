export default function HighlightsCard() {
    return (
        <>
            <div className="flex flex-col gap-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                <h1 className="text-lg font-bold">Highlights</h1>
                <div className="flex w-60 flex-col gap-2 rounded-3xl bg-neutral-50/30 p-4 backdrop-blur dark:bg-neutral-950/30">
                    <h1 className="text-lg font-bold">Wind</h1>
                    <div className="flex flex-row items-center gap-2">
                        <span className="material-symbols-rounded">air</span>
                        <h1 className="text-3xl">20 km/h NE</h1>
                    </div>
                    <p>Gust: 25 km/h</p>
                </div>
            </div>
        </>
    );
}
