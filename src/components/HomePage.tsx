import SavedLocation from "./SavedLocation";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <h1 className="text-3xl">Saved Locations</h1>
                <SavedLocation
                    city="Toronto"
                    summary="Overcast"
                    temperature="0°C"
                />
            </div>
        </>
    );
}