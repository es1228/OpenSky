import Map from "./Map";

export default function RadarPage() {
    return (
        <>
            <div className="flex flex-col gap-5 overflow-auto">
                <Map />
            </div>
        </>
    );
}